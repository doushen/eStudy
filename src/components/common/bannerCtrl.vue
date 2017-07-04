<template>
  <div id="bannerCtrl">
    <div class='swiper-container'>
        <div class='swiper-wrapper'>
            <div class='swiper-slide' v-for="item in Data" :style="{backgroundImage: 'url('+item.ImgUrl+')'}" >count:{{bannerListCount}}</div>
        </div>
        <div class='swiper-pagination swiper-pagination-white'></div>
    </div>
  </div>
</template>

<script>
    // import homeData from '@/api/home/home'
    // import loading from '@/components/common/loading'
    import {mapActions} from 'vuex'
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.min.css'

    export default {
      name: 'bannerCtrl',
      data () {
        return {
          Data: [],
          showLoading: true
        }
      },
      components: {
        // loading
      },
      created () {
      },
      mounted () {
        // this.getBannerList().then(res => {
        //   this.Data = res.data.Data
        // }).then(() => {

        // })

        this.$store.dispatch('getBannerList').then(() => {
          this.Data = this.$store.state.oces.bannerList.Data
          this.$nextTick(function () {
            var swiper = new Swiper('.swiper-container', {
              pagination: '.swiper-pagination',
              paginationClickable: true,
              loop: true,
              speed: 600,
              autoplay: 1000,
              onTouchEnd: function () {
                swiper.startAutoplay()
              }
            })
            // setTimeout(() => {
            this.showLoading = false
            // }, 1000)
          })
        })

        // this.getBannerList().then((res) => {
        //   console.log(this)
        //   this.$nextTick(function () {
        //     var swiper = new Swiper('.swiper-container', {
        //       pagination: '.swiper-pagination',
        //       paginationClickable: true,
        //       loop: true,
        //       speed: 600,
        //       autoplay: 1000,
        //       onTouchEnd: function () {
        //         swiper.startAutoplay()
        //       }
        //     })
        //     // setTimeout(() => {
        //     this.showLoading = false
        //     // }, 1000)
        //   })
        // })
      },
      computed: {
        // ...mapState({
        //   bannerList: state => state.oces.bannerList
        // })
        bannerListCount () {
          return this.$store.getters.bannerListCount
        }
      },
      methods: {
        ...mapActions([
          'getBannerList'
        ])
      }
    }
</script>
<style lang='scss' scoped>

    .swiper-container {
        width: 100%;
        height: 8rem;
        .swiper-wrapper {
            width: 100%;
            height: 100%;
        }
        .swiper-slide {
            background-position: center;
            background-size: cover;
            color: #fff;
            text-align: center;
            line-height: 3rem;
            width: 100%;
            height: 100%;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .swiper-pagination-bullet {
            width:0.833rem;
            height: 0.833rem;
            display: inline-block;
            background: #7c5e53;
        }
    }
</style>
