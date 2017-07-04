<template>
  <div id="oces">
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
    <footerCtrl></footerCtrl>
  </div>
</template>

<script>
import footerCtrl from '@/components/footer/footerCtrl'
export default {
  name: 'oces',
  data () {
    return {
      transitionName: 'vux-pop-in'
    }
  },
  watch: {
    '$route' (to, from) {
      // const toDepth = to.path.split('/').length
      // const fromDepth = from.path.split('/').length
      // console.log(to, from)
      // this.transitionName = toDepth < fromDepth ? 'vux-pop-out' : 'vux-pop-in'

      let transitionstr = 'vux-pop-in'
      if (from.name === 'home') {
        transitionstr = 'vux-pop-in'
      } else if (from.name === 'my') {
        transitionstr = 'vux-pop-out'
      } else if (from.name === 'courses') {
        if (to.name === 'home') {
          transitionstr = 'vux-pop-out'
        } else {
          transitionstr = 'vux-pop-in'
        }
      }
      this.transitionName = transitionstr
    }
  },
  components: {
    footerCtrl
  }
}
</script>

<style lang="scss">
  @import '../../style/common';

  .router-fade-enter-active{
    transition: opacity .3s;
    // transform: translate3d(-100%, 0, 0);
    // animation-name: popOutLeft;
    // transition: all 1s;
  }
  .router-fade-leave-active {
    transition: opacity .0s;
  }
  .router-fade-enter, .router-fade-leave-active {
    opacity: 0;
    // animation-name: popOutLeft;

  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active for <2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }

  .vux-pop-in-enter-active {
    animation: popInRight .3s ;
  }
  .vux-pop-in-leave-active {
    animation: popOutLeft .0s ;
  }
  .vux-pop-out-enter-active {
    animation: popInLeft .3s ;
  }
  .vux-pop-out-leave-active {
    animation: popOutRight .0s ;
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

</style>
