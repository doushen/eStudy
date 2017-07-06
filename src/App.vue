<template>
  <div id="app">
    <headerCtrl headerTitle="学吧" @triggerSliderBar="triggerSliderBar"></headerCtrl>
    <sliderBarCtrl :isShow="showSliderBar" @hideSlider="hideSlider"></sliderBarCtrl>
    <transition name="vux-pop-in">
      <router-view></router-view>
    </transition>
    <footerCtrl></footerCtrl>
  </div>
</template>

<script>
import headerCtrl from '@/components/header/headerCtrl'
import sliderBarCtrl from '@/components/common/sliderBarCtrl'
import footerCtrl from '@/components/footer/footerCtrl'
// import slide from '@/components/common/slide'
export default {
  name: 'app',
  components: {
    headerCtrl,
    sliderBarCtrl,
    footerCtrl
    // slide
  },
  data () {
    return {
      showSliderBar: false
    }
  },
  mounted () {
    // slide.show = true
  },
  methods: {
    triggerSliderBar () {
      console.log(this.showSliderBar)
      this.showSliderBar = !this.showSliderBar
    },
    hideSlider () {
      this.showSliderBar = false
    }
  }
}
</script>

<style lang="scss">
  @import './style/common';
  // .router-fade-enter-active, .router-fade-leave-active {
  //   transition: opacity .2s;
  // }
  // .router-fade-enter, .router-fade-leave-active {
  //   opacity: 0;
  // }

  // .slide-fade-enter-active {
  //   transition: all .3s ease;
  // }
  // .slide-fade-leave-active {
  //   transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  // }
  // .slide-fade-enter, .slide-fade-leave-to
  // /* .slide-fade-leave-active for <2.1.8 */ {
  //   transform: translateX(10px);
  //   opacity: 0;
  // }


  .vux-pop-in-enter-active {
    animation: popInRight .3s ;
  }
  .vux-pop-in-leave-active {
    animation: popOutLeft .0s ;
  }
  @keyframes popInLeft {
    0% {
      transform: translate3d(-100%, 0, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes popOutLeft {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(-100%, 0, 0);
    }
  }
  @keyframes popInRight {
    0% {
      transform: translate3d(100%, 0, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes popOutRight {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(100%, 0, 0);
    }
  }
  #app{
    width: 100%;
    height: 100%;
  }
</style>
