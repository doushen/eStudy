<template>
  <div class="slider-bar">
    <div class="slider-bar-overlay"></div>
    <aside class="slider-bar-menu">
      <ul>
        <li>menu1</li>
        <li>menu2</li>
        <li>menu3</li>
        <li>menu4</li>
        <li>menu5</li>
      </ul>
    </aside>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .slider-bar {
    display: block;
    bottom: 0;
    left: 0;
    top: 0;
    width: 100%;
    position: absolute;
    z-index: 38;
  }
  .slider-bar-overlay {
    background-color: rgba(0,0,0,.2);
    bottom: 0;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 39;
  }
  .slider-bar-menu {
    max-width: 17.5rem;
    z-index: 40;
    position: absolute;
    left: 0;
    top: 0;
  }
</style>
