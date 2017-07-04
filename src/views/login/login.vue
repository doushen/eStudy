<template>
  <transition name="vux-pop-in">
      <div class="loginContainer">
        <p class="login-title">欢迎登陆</p>
        <form action="">
          <label for="username"></label>
          <input class="form-input" type="text" id="username" placeholder="手机号码/用户名/邮箱">
          <label for="password"></label>
          <input class="form-input" type="text" id="password" placeholder="密码">
          <button class="submit-button" type="submit">登陆</button>
        </form>
      </div>
  </transition>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    created () {
    },
    components: {
    },
    computed: {
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
    @import '../../style/mixin';

    .loginContainer{
        height: 100%;
        background: url("../../images/login-bk.png") #ffffff no-repeat;
        background-size: 100%;
        form{
          padding-top: 2.898rem;
        }
    }
    .login-title{
      text-align: center;
      padding-top: 4.173rem;
      @include sc(0.927rem,#666666)
    }
  .form-input{
    height: 1.758rem;
    width: 90%;
    margin-left: 5%;
    border: 1px solid #d5d5d5;
    text-indent: 2rem;
  }
  .form-input:first-of-type{
    border-bottom: none;
    background: url("../../images/user.svg") no-repeat 0 50%;
    background-size: 2rem;
  }
  .form-input:last-of-type{
    background: url("../../images/password.svg") no-repeat 0 50%;
    background-size: 2rem;
  }
  .form-input:-ms-input-placeholder{
    @include sc(0.502rem,#c8c9c9)
  }
  .form-input::-webkit-input-placeholder{
    @include sc(0.502rem,#c8c9c9)
  }
  .submit-button{
    height: 1.758rem;
    width: 90%;
    margin-left: 5%;
  }
</style>
