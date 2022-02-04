<template>
  <div class="navigation-menu">
    <div
      :class="[
        'navigation-menu__tribal-left',
        { 'navigation-menu__tribal-left--offset': isWheelMoving },
      ]"
    >
      <img draggable="false" src="@/assets/tribal-1.svg" />
    </div>
    <div
      :class="[
        'navigation-menu__item',
        { 'navigation-menu__item--active': selected == i },
        { 'navigation-menu__item--2nd-before': selected == i - 2 },
        { 'navigation-menu__item--1st-before': selected == i - 1 },
        { 'navigation-menu__item--1st-after': selected == i + 1 },
        { 'navigation-menu__item--2nd-after': selected == i + 2 },
        {
          'navigation-menu__item--hidden': selected > i + 2 || selected < i - 2,
        },
      ]"
      v-for="(route, i) in routes"
      :key="i"
    >
      {{ route.name }}
    </div>
    <div
      :class="[
        'navigation-menu__tribal-right',
        { 'navigation-menu__tribal-right--offset': isWheelMoving },
      ]"
    >
      <img draggable="false" src="@/assets/tribal-1.svg" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const selected = ref(2);
    const router = useRouter();

    const routes = ref([
      {
        name: "career",
        path: "/career",
      },
      {
        name: "personal info",
        path: "/me",
      },
      {
        name: "projects",
        path: "/projects",
      },
      {
        name: "store",
        path: "/store",
      },
      {
        name: "order",
        path: "/order",
      },
    ]);

    type TSoundName = "selector-wheel--choose" | "selector-wheel--submit";

    const playSound = (name: TSoundName) => {
      let audio = new Audio(`src/assets/${name}.wav`);
      audio.play();
      setTimeout(() => {
        audio.pause();
        audio.remove();
      }, 2000);
    };

    const submit = () => {
      playSound("selector-wheel--submit");
      router.push(routes.value[selected.value]);
    };

    let lastMove: any = null;
    let isWheelMoving = ref(false);
    let t = 0;
    let msBeforeMove = 70;

    const scroll = (direction: number) => {
      if (+new Date() > lastMove + msBeforeMove) {
        let y = selected.value;
        y += direction;
        lastMove = +new Date();
        y = Math.min(Math.max(y, 0), routes.value.length - 1);
        if (selected.value != y) {
          playSound("selector-wheel--choose");
          isWheelMoving.value = true;
          clearTimeout(t);
          t = setTimeout(() => {
            isWheelMoving.value = false;
          }, 200);
        }
        selected.value = y;
      }
    };

    const onWheelHandler = (e: WheelEvent) => {
      scroll((e.deltaY / 100) * -1);
    };

    const onKeyDownHandler = (e: KeyboardEvent) => {
      if (e.key == "Enter") submit();
      if (e.key == "ArrowDown") scroll(-1);
      if (e.key == "ArrowUp") scroll(1);
      if (e.key == "Escape") router.push({ path: "/" });
    };

    window.addEventListener("wheel", onWheelHandler);
    window.addEventListener("keydown", onKeyDownHandler);

    onBeforeUnmount(() => {
      window.removeEventListener("wheel", onWheelHandler);
      window.removeEventListener("keydown", onKeyDownHandler);
    });

    return {
      routes,
      selected,
      isWheelMoving,
    };
  },
});
</script>

<style lang="scss" scoped>
.navigation-menu {
  color: gray;
  font-size: 2.2em;
  font-family: "Metal Macabre Regular";
  position: relative;
  width: 10em;
  height: 3em;
  margin: auto;
  filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.7));

  &__item {
    position: absolute;
    top: 0.3em;
    width: 100%;
    white-space: nowrap;
    transition: all 200ms ease-out;
    text-shadow: 0 0 25px white;
    text-transform: capitalize;

    &--active {
      color: black;
    }

    &--hidden {
      opacity: 0;
    }

    &--1st-after,
    &--1st-before {
      color: gray;
      opacity: 0.8;
      filter: blur(0.02em);
    }

    &--2nd-after,
    &--2nd-before {
      filter: blur(0.1em);
      opacity: 0.2;
    }

    &--1st-after {
      transform: translateY(1em) scaleY(0.5);
    }
    &--1st-before {
      transform: translateY(-1.3em) scaleY(0.5);
    }
    &--2nd-after {
      transform: translateY(1.5em) scaleY(0.2);
    }
    &--2nd-before {
      transform: translateY(-2em) scaleY(0.2);
    }
  }

  &__tribal-left,
  &__tribal-right {
    position: absolute;
    width: 2em;
    height: 2em;
    transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    &--offset {
      transform: translate(-0.4em, 0.4em);
    }

    img {
      position: absolute;
      top: 0;
      right: -0.2em;
      width: 10em;
    }
  }

  &__tribal-left {
    left: -1.6em;
    bottom: -1.6em;
  }

  &__tribal-right {
    right: -1.6em;
    top: -1.6em;
    transform: rotate(180deg);
    &--offset {
      transform: rotate(180deg) translate(-0.4em, 0.4em);
    }
    img {
      position: absolute;
      top: 0;
      right: -0.2em;
      width: 10em;
    }
  }
}
</style>
