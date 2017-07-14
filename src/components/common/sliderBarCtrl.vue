<template>
  <div class="slider-bar" :class="[isShow==true ? 'in' : 'out']">
    <div class="slider-bar-overlay" :class="[isShow==true ? 'in' : 'out']" @click="hideSlider"></div>
    <aside class="slider-bar-menu sliderShow" :class="[isShow==true ? 'in' : 'out']">
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
  props: ['isShow'],
  methods: {
    hideSlider () {
      // this.isShow = false
      this.$emit('hideSlider')
    }
  }
}
</script>

<style lang="scss" scoped>
  .slider-bar {
    display: block;
    bottom: 0;
    left: 0;
    top: 0;
    width: 100%;
    position: fixed;
    z-index: 138;
    transform: translate3d(-100%,0,0);

    &.in {
      -webkit-transform: translate3d(0,0,0);
      transform: translate3d(0,0,0);
      -webkit-transition: -webkit-transform .4s cubic-bezier(.25,.8,.25,1);
      -moz-transition: -moz-transform .4s cubic-bezier(.25,.8,.25,1);
      -o-transition: -o-transform .4s cubic-bezier(.25,.8,.25,1);
      transition: transform .4s cubic-bezier(.25,.8,.25,1);
    }
    &.out {
      -webkit-transform: translate3d(-100%,0,0);
      transform: translate3d(-100%,0,0);
      -webkit-transition: -webkit-transform .4s cubic-bezier(.25,.8,.25,1) .4s;
      -moz-transition: -moz-transform .4s cubic-bezier(.25,.8,.25,1) .4s;
      -o-transition: -o-transform .4s cubic-bezier(.25,.8,.25,1) .4s;
      transition: transform .4s cubic-bezier(.25,.8,.25,1) .4s;
    }
  }
  .sliderShow {
    transform: translate3d(-100%,0,0);
    &.in {
      -webkit-transform: translate3d(0,0,0);
      transform: translate3d(0,0,0);
      -webkit-transition: -webkit-transform .4s cubic-bezier(.25,.8,.25,1) .4s;
      -moz-transition: -moz-transform .4s cubic-bezier(.25,.8,.25,1) .4s;
      -o-transition: -o-transform .4s cubic-bezier(.25,.8,.25,1) .4s;
      transition: transform .4s cubic-bezier(.25,.8,.25,1) .4s;
    }
    &.out {
      -webkit-transform: translate3d(-100%,0,0);
      transform: translate3d(-100%,0,0);
      -webkit-transition: -webkit-transform .4s cubic-bezier(.25,.8,.25,1);
      -moz-transition: -moz-transform .4s cubic-bezier(.25,.8,.25,1);
      -o-transition: -o-transform .4s cubic-bezier(.25,.8,.25,1);
      transition: transform .4s cubic-bezier(.25,.8,.25,1);
    }
  }
  .slider-bar-overlay {
    background-color: #000;
    bottom: 0;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 139;
    opacity: 0;
    &.in {
      -webkit-transition: -webkit-opacity .1s cubic-bezier(.25,.8,.25,1) .4s;
      -moz-transition: -moz-opacity .1s cubic-bezier(.25,.8,.25,1) .4s;
      -o-transition: -o-opacity .1s cubic-bezier(.25,.8,.25,1) .4s;
      transition: opacity .1s cubic-bezier(.25,.8,.25,1) .4s;
      opacity: .2;
    }
    &.out {
      -webkit-transition: -webkit-opacity .4s cubic-bezier(.25,.8,.25,1);
      -moz-transition: -moz-opacity .4s cubic-bezier(.25,.8,.25,1);
      -o-transition: -o-opacity .4s cubic-bezier(.25,.8,.25,1);
      transition: opacity .4s cubic-bezier(.25,.8,.25,1);
      opacity: 0;
    }
  }
  .slider-bar-menu {
    max-width: 80%;
    min-width: 40%;
    z-index: 140;
    background-color: #363c43;
    position: fixed;
    height: 100vh;
    > ul {
      li {
        padding: .5rem;
        color: #fff;
        font-size: .45rem;
      }
    }
    left: 0;
    top: 0;
  }
</style>
