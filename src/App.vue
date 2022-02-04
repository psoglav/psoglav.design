<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();
    window.addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.key == "Escape") router.push({ path: "/" });
    });

    return {
      route: router.currentRoute,
    };
  },
});
</script>

<template>
  <div :class="['first-element', { 'first-element--blur': route.path != '/' }]">
    <img draggable="false" src="./assets/first-element.png" />
  </div>
  <transition name="page-transition">
    <router-view />
  </transition>
  <div
    :class="['second-element', { 'second-element--blur': route.path != '/' }]"
  >
    <img draggable="false" src="./assets/second-element.png" />
  </div>
</template>

<style lang="scss">
html {
  background: rgb(238, 238, 238);
  background: radial-gradient(
    circle,
    rgba(238, 238, 238, 1) 0%,
    rgba(238, 238, 238, 1) 53%,
    rgba(204, 204, 204, 1) 98%
  );
}

.page-transition-enter-active,
.page-transition-leave-active {
  transition: opacity 0.5s ease;
}

.page-transition-enter-from,
.page-transition-leave-to {
  opacity: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

.page {
  height: 98vh;
  display: grid;
  align-content: center;
}

.first-element,
.second-element {
  max-width: 70vw;
  position: fixed;
  transition: all 0.4s ease;

  &--blur {
    filter: blur(0.5em);
  }

  img {
    width: 100%;
  }
}

.first-element {
  inset: 0;

  &--blur {
    transform: translate(-1em, -1em) scale(1.5);
  }
}

.second-element {
  max-height: 100vh;
  bottom: 0;
  right: 0;

  &--blur {
    transform: translate(1em, 1em) scale(1.5);
  }
}
</style>
