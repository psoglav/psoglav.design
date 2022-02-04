<template>
  <div class="page">
    <main>
      <div>
        Ac et massa sit id tempus nunc ut imperdiet vitae. Non ac vel, non
        aliquam quis. Sed turpis tristique dui urna sit lorem enim. Tellus quam
        a in sed varius viverra nibh. Aliquam urna at non placerat vel. Diam
        eget eu tempus, faucibus scelerisque mauris. Ut tincidunt morbi quisque
        sit phasellus cursus magna feugiat amet. Donec ac magna sed sit. Felis
        nec iaculis amet, iaculis adipiscing leo, sapien dictum risus. Convallis
        augue interdum felis eget cursus. Enim phasellus morbi eu nullam
        pellentesque vel ultrices. Nullam risus, suspendisse sit vestibulum, id
        enim. Aliquam sit ut dignissim diam fusce integer. Vitae suspendisse
        risus fringilla faucibus. Sit tempor elit arcu, ac.
      </div>
      <div>
        Donec ac magna sed sit. Felis nec iaculis amet, iaculis adipiscing leo,
        sapien dictum risus. Convallis augue interdum felis eget cursus. Enim
        phasellus morbi eu nullam pellentesque vel ultrices. Nullam risus,
        suspendisse sit vestibulum, id enim. Aliquam sit ut dignissim diam fusce
        integer. Vitae suspendisse risus fringilla faucibus. Sit tempor elit
        arcu, ac:
      </div>
    </main>
  </div>
</template>

<style lang="scss">
.page {
  display: flex;
  align-content: center;
  main {
    margin: auto;
    gap: 1em;
    font-family: Kanit;
    display: flex;

    div {
      text-indent: 0.7em;
      text-align: justify;
      max-width: 25em;
      line-height: 1.5em;
      font-size: 1.05em;

      &::first-letter {
        text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.7);
        line-height: 0.5em;
        font-size: 1.8em;
        font-family: "Metal Macabre Regular";
      }
    }
  }
}
</style>
