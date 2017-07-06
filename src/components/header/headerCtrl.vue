<template>
    <header id='headerCtrl'>
        <slot name='logo'></slot>
        <slot name='search'></slot>
        <section class="header_goback" v-if="goBack" @click="$router.go(-1)">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <polyline points="12,18 4,9 12,0" style="fill:none;stroke:rgb(255,255,255);stroke-width:2"/>
            </svg>
        </section>
        <router-link :to="userInfo? '/profile':'/login'" v-if='signinUp' class="header_login">
            <svg class="user_avatar" v-if="userInfo">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#user"></use>
            </svg>
            <span class="login_span" v-else>登录|注册</span>
        </router-link>
        <section class="title_head ellipsis" v-if="headerTitle">
            <span class="title_text">{{headerTitle}}</span>
        </section>
        <slot name="edit"></slot>
        <slot name="opentitle"></slot>
        <slot name="changecity"></slot>
        <slot name="changeLogin"></slot>
        <section class="rightMenu" @click="triggerSliderBar">
          <span>=</span>
        </section>
    </header>
</template>

<script>
// import {mapState, mapActions} from 'vuex'
  export default {
    data () {
      return {

      }
    },
    mounted () {
      // 获取用户信息
      // this.getUserInfo();
    },
    props: ['signinUp', 'headerTitle', 'goBack'],
    computed: {
      // ...mapState([
      //     'userInfo'
      // ]),
    },
    methods: {
      // ...mapActions([
      //     'getUserInfo'
      // ]),
      triggerSliderBar () {
        // console.log('trigger')
        this.$emit('triggerSliderBar')
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import '../../style/mixin';

    #headerCtrl{
        background-color: $blue;
        position: fixed;
        z-index: 100;
        left: 0;
        top: 0;
        @include wh(100%, 1.95rem);
    }
    .header_goback{
        left: 0.4rem;
        @include wh(0.6rem, 1rem);
        line-height: 2.2rem;
        margin-left: .4rem;
    }
    .header_login{
        right: 0.55rem;
        @include sc(0.65rem, #fff);
        @include ct;
        .login_span{
            color: #fff;
        }
        .user_avatar{
            fill: #fff;
            @include wh(.8rem, .8rem);
        }
    }
    .title_head{
        @include center;
        width: 50%;
        color: #fff;
        text-align: center;
        .title_text{
            @include sc(0.8rem, #fff);
            text-align: center;
            font-weight: bold;
        }
    }
    .rightMenu {
      float: right;
      cursor: pointer;
      > span {
        color:white;display:inline-block;margin:.2rem .5rem 0 0;
      }
    }
</style>
