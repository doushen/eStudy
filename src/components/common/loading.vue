 <template>
  <transition name="loading-fade" mode="out-in">
    <div class="loading_bg" v-show="isLoading">
      <div class="loading_container">
          <div class="load_img" :style="{backgroundPositionY: -(positionY%7)*2.5 + 'rem'}">
          </div>
          <svg class="load_ellipse" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <ellipse cx="26" cy="10" rx="26" ry="10" style="fill:#ddd;stroke:none;"></ellipse>
          </svg>
      </div>
    </div>
  </transition>
</template>

<script>
import {
  mapState
} from 'vuex'
export default {
  data() {
    return {
      positionY: 0,
      timer: null
    }
  },
  mounted() {
    // this.timer = setInterval(() => {
    //   this.positionY ++
    // }, 600)
  },
  computed: {
    ...mapState({
      isLoading: state => state.isLoading
    })
    // visible () {
    //   return this.$store.state.isLoading
    // }
  },
  watch: {
    isLoading: function() {
      if (this.isLoading) {
        this.timer = setInterval(() => {
          this.positionY++
        }, 600)
      } else {
        clearInterval(this.timer)
      }
    }
  },
  beforeDestroy() {
    clearInterval(this.timer)
  }
}
</script>

<style lang="scss">
Error: Source sample is missing.
</style>


<style lang="scss" scoped>
@import '../../style/mixin';

.loading-fade-enter-active,
.loading-fade-leave-active {
    transition: opacity 0.6s;
}
.loading-fade-enter,
.loading-fade-leave-active {
    opacity: 0;
}
@keyframes load {
    0% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-50px);
    }
    100% {
        transform: translateY(0px);
    }
}
@keyframes ellipse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(0.3);
    }
    100% {
        transform: scale(1);
    }
}
.loading_bg {
    position: fixed;
    top: 0;
    left: 0;
    background: url("../../images/empty_loading.svg") no-repeat 0 0;
    @include wh(100%, 100%);
}
.loading_container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @include wh(2.5rem, 2.5rem);
}
.load_img {
    @include wh(100%, 100%);
    background: url("../../images/icon_loading.png") no-repeat 0 0;
    background-size: 2.5rem auto;
    transform: translateY(0px);
    animation: load 0.6s infinite ease-in-out;
    position: relative;
    z-index: 11;
}
.load_ellipse {
    position: absolute;
    @include wh(2.6rem, 2rem);
    top: 2.2rem;
    left: 0.2rem;
    z-index: 10;
    animation: ellipse 0.6s infinite ease-in-out;
}
</style>
