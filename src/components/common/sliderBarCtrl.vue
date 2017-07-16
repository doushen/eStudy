<template>
<div id="aside" class="app-aside modal fade nav-dropdown in" style="display: block;">
  <div class="left navside grey dk" data-layout="column">
    <div class="navbar no-radius">
      <a href="index.html" class="navbar-brand md">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="32" height="32">
          <circle cx="24" cy="24" r="24" fill="rgba(255,255,255,0.2)"></circle>
          <circle cx="24" cy="24" r="22" fill="#1c202b" class="brand-color"></circle>
          <circle cx="24" cy="24" r="10" fill="#ffffff"></circle>
          <circle cx="13" cy="13" r="2" fill="#ffffff" class="brand-animate"></circle>
          <path d="M 14 24 L 24 24 L 14 44 Z" fill="#FFFFFF"></path>
          <circle cx="24" cy="24" r="3" fill="#000000"></circle>
        </svg>
        <img src="../../images/logo.png" alt="." class="hide">
        <span class="hidden-folded inline">pulse</span>
      </a>
    </div>
    <div
      data-flex="" class="hide-scroll">
      <nav class="scroll nav-stacked nav-active-primary">
        <ul class="nav" data-ui-nav="">
          <li class="nav-header hidden-folded"><span class="text-xs text-muted">Main</span></li>
          <li class="active"><a href="player.html"><span class="nav-icon"><i class="material-icons">play_circle_outline</i></span> <span class="nav-text">Discover</span></a></li>
          <li><a href="browse.html"><span class="nav-icon"><i class="material-icons">sort</i></span> <span class="nav-text">Browse</span></a></li>
          <li><a href="chart.html"><span class="nav-icon"><i class="material-icons">trending_up</i></span> <span class="nav-text">Charts</span></a></li>
          <li><a href="artist.html"><span class="nav-icon"><i class="material-icons">portrait</i></span> <span class="nav-text">Artist</span></a></li>
          <li><a data-toggle="modal" data-target="#search-modal"><span class="nav-icon"><i class="material-icons">search</i></span> <span class="nav-text">Search</span></a></li>
          <li class="nav-header hidden-folded m-t"><span class="text-xs text-muted">Your collection</span></li>
          <li><a href="profile.html#tracks"><span class="nav-label"><b class="label">8</b></span> <span class="nav-icon"><i class="material-icons">list</i></span> <span class="nav-text">Tracks</span></a></li>
          <li><a href="profile.html#playlists"><span class="nav-icon"><i class="material-icons">queue_music</i></span> <span class="nav-text">Playlists</span></a></li>
          <li><a href="profile.html#likes"><span class="nav-icon"><i class="material-icons">favorite_border</i></span> <span class="nav-text">Likes</span></a></li>
        </ul>
      </nav>
  </div>
  <div data-flex-no-shrink="">
    <div class="nav-fold dropup"><a data-toggle="dropdown"><span class="pull-left"><img src="../../images/a3.jpg" alt="..." class="w-32 img-circle"></span> <span class="clear hidden-folded p-x p-y-xs"><span class="block _500 text-ellipsis">Rachel Platten</span></span></a>
      <div class="dropdown-menu w dropdown-menu-scale"><a class="dropdown-item" href="profile.html#profile"><span>Profile</span></a> <a class="dropdown-item" href="profile.html#tracks"><span>Tracks</span></a> <a class="dropdown-item" href="profile.html#playlists"><span>Playlists</span></a> <a class="dropdown-item"
          href="profile.html#likes"><span>Likes</span></a>
        <div class="dropdown-divider"></div><a class="dropdown-item" href="docs.html">Need help?</a> <a class="dropdown-item" href="signin.html">Sign out</a></div>
    </div>
  </div>
</div>
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
        -webkit-transition: -webkit-transform 0.4s cubic-bezier(.25,.8,.25,1);
        -moz-transition: -moz-transform 0.4s cubic-bezier(.25,.8,.25,1);
        -o-transition: -o-transform 0.4s cubic-bezier(.25,.8,.25,1);
        transition: transform 0.4s cubic-bezier(.25,.8,.25,1);
    }
    &.out {
        -webkit-transform: translate3d(-100%,0,0);
        transform: translate3d(-100%,0,0);
        -webkit-transition: -webkit-transform 0.4s cubic-bezier(.25,.8,.25,1) 0.4s;
        -moz-transition: -moz-transform 0.4s cubic-bezier(.25,.8,.25,1) 0.4s;
        -o-transition: -o-transform 0.4s cubic-bezier(.25,.8,.25,1) 0.4s;
        transition: transform 0.4s cubic-bezier(.25,.8,.25,1) 0.4s;
    }
}
.sliderShow {
    transform: translate3d(-100%,0,0);
    &.in {
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
        -webkit-transition: -webkit-transform 0.4s cubic-bezier(.25,.8,.25,1) 0.4s;
        -moz-transition: -moz-transform 0.4s cubic-bezier(.25,.8,.25,1) 0.4s;
        -o-transition: -o-transform 0.4s cubic-bezier(.25,.8,.25,1) 0.4s;
        transition: transform 0.4s cubic-bezier(.25,.8,.25,1) 0.4s;
    }
    &.out {
        -webkit-transform: translate3d(-100%,0,0);
        transform: translate3d(-100%,0,0);
        -webkit-transition: -webkit-transform 0.4s cubic-bezier(.25,.8,.25,1);
        -moz-transition: -moz-transform 0.4s cubic-bezier(.25,.8,.25,1);
        -o-transition: -o-transform 0.4s cubic-bezier(.25,.8,.25,1);
        transition: transform 0.4s cubic-bezier(.25,.8,.25,1);
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
        -webkit-transition: -webkit-opacity 0.1s cubic-bezier(.25,.8,.25,1) 0.4s;
        -moz-transition: -moz-opacity 0.1s cubic-bezier(.25,.8,.25,1) 0.4s;
        -o-transition: -o-opacity 0.1s cubic-bezier(.25,.8,.25,1) 0.4s;
        transition: opacity 0.1s cubic-bezier(.25,.8,.25,1) 0.4s;
        opacity: 0.2;
    }
    &.out {
        -webkit-transition: -webkit-opacity 0.4s cubic-bezier(.25,.8,.25,1);
        -moz-transition: -moz-opacity 0.4s cubic-bezier(.25,.8,.25,1);
        -o-transition: -o-opacity 0.4s cubic-bezier(.25,.8,.25,1);
        transition: opacity 0.4s cubic-bezier(.25,.8,.25,1);
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
            padding: 0.5rem;
            color: #fff;
            font-size: 0.45rem;
        }
    }
    left: 0;
    top: 0;
}
</style>
