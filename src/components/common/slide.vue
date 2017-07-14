<template>
<div id="aside" class="app-aside modal fade nav-dropdown in" style="display: block;">
  <div class="left navside grey dk" data-layout="column">
    <div class="navbar no-radius"><a href="index.html" class="navbar-brand md"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="32" height="32"><circle cx="24" cy="24" r="24" fill="rgba(255,255,255,0.2)"></circle><circle cx="24" cy="24" r="22" fill="#1c202b" class="brand-color"></circle><circle cx="24" cy="24" r="10" fill="#ffffff"></circle><circle cx="13" cy="13" r="2" fill="#ffffff" class="brand-animate"></circle><path d="M 14 24 L 24 24 L 14 44 Z" fill="#FFFFFF"></path><circle cx="24" cy="24" r="3" fill="#000000"></circle></svg> <img src="images/logo.png" alt="." class="hide"> <span class="hidden-folded inline">pulse</span></a></div>
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
    <div class="nav-fold dropup"><a data-toggle="dropdown"><span class="pull-left"><img src="images/a3.jpg" alt="..." class="w-32 img-circle"></span> <span class="clear hidden-folded p-x p-y-xs"><span class="block _500 text-ellipsis">Rachel Platten</span></span></a>
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
  props: {
    show: {
      type: Boolean,
      default: false
    },
    pos: {
      type: String,
      default: 'left'
    },
    tran: {
      type: String,
      default: 'overlay'
    }
  },
  data () {
    return {
      drawerWidth: 0,
      translateX: 0
    }
  },
  watch: {
    show: function () {
      // listener
      if (!this.show) {
        this.$emit('on-hide')
      } else {
        this.$emit('on-show')
      }
      // transition
      if (this.tran === 'overlay') {
        return
      }
      if (!this.show) {
        this.translateX = 0
      } else {
        this.translateX = this.pos === 'left' ? this.drawerWidth : -this.drawerWidth
      }
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.drawerWidth = this.$refs.drawer.clientWidth
    })
  },
  methods: {
    hideMask () {
      // this.show = false;
      this.$emit('change-show', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.app-aside {
  position: fixed!important;
  z-index: 1030;
  float: left
}

.app-content {
  box-shadow: none;
  padding: 0
}

.app-content::after {
  display: table;
  clear: both
}

.app-header {
  position: fixed;
  top: 0;
  z-index: 1020
}

.app-header~.app-body {
  padding-top: 3.5rem
}

.app-body-inner {
  padding-top: inherit!important;
  padding-bottom: inherit!important;
  position: absolute;
  top: 0;
  bottom: 0;
  overflow: auto
}

.app-footer {
  position: absolute;
  bottom: 0;
  z-index: 1010
}

.app-fixed {
  overflow: hidden
}

.app-fixed .app {
  height: 100%
}

.app-fixed .app-content {
  position: relative;
  min-height: 100%
}

.app-fixed .app-footer {
  margin-left: 0
}

@media (min-width:992px) {
  .app-aside {
    opacity: 1;
    display: block!important
  }
  .app-aside, .app-aside .scroll {
    width: 12.5rem
  }
  .app-aside.lg:not(.folded), .app-aside.lg:not(.folded) .scroll {
    width: 13.75rem
  }
  .app-aside.lg:not(.hide)~.app-content {
    margin-left: 13.75rem
  }
  .app-aside.sm:not(.folded), .app-aside.sm:not(.folded) .scroll {
    width: 11.25rem
  }
  .app-aside.sm:not(.hide)~.app-content {
    margin-left: 11.25rem
  }
  .app-aside.folded {
    width: 4rem
  }
  .app-aside.folded:not(.hide)~.app-content {
    margin-left: 4rem
  }
  .app-aside.folded.md {
    width: 5rem
  }
  .app-aside.folded.md:not(.hide)~.app-content {
    margin-left: 5rem
  }
  .app-aside:not(.hide)~.app-content {
    margin-left: 12.5rem
  }
  .app-aside .left {
    position: absolute;
    right: 0;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0)
  }
  .app-header.hidden-lg-up~.app-body {
    padding-top: 0
  }
  .hide-scroll {
    width: auto;
    margin-right: -17px;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch
  }
}

@media (max-width:991px) {
  .app-aside.modal {
    width: 100%;
    position: fixed;
    z-index: 1050
  }
  .app-aside .left {
    position: fixed;
    bottom: inherit;
    width: 304px
  }
  body.container {
    max-width: 100%;
    padding-left: 0;
    padding-right: 0
  }
}

@media print {
  .app-aside, .app-footer, .app-header, .switcher {
    display: none
  }
}

.ie9 .app-aside {
  position: static!important
}

.ie9 .app-aside .left {
  width: inherit;
  position: absolute
}

@media (min-width:992px) {
  body.container {
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
    padding-left: 0;
    padding-right: 0
  }
  body.container .app-aside {
    left: inherit;
    right: auto
  }
  body.container .app-aside.lg~.app-content .app-header {
    width: 45rem
  }
  body.container .app-aside.sm~.app-content .app-header {
    width: 47.5rem
  }
  body.container .app-aside.folded~.app-content .app-header {
    width: 54.75rem
  }
  body.container .app-aside.folded.md~.app-content .app-header {
    width: 53.75rem
  }
  body.container .app-aside~.app-content .app-header {
    width: 46.25rem
  }
  body.container .app-header {
    left: inherit;
    right: auto;
    margin-left: 0;
    width: 58.75rem
  }
}

@media (min-width:1200px) {
  body.container .app-aside.lg~.app-content .app-header {
    width: 57.5rem
  }
  body.container .app-aside.sm~.app-content .app-header {
    width: 60rem
  }
  body.container .app-aside.folded~.app-content .app-header {
    width: 67.25rem
  }
  body.container .app-aside.folded.md~.app-content .app-header {
    width: 66.25rem
  }
  body.container .app-aside~.app-content .app-header {
    width: 58.75rem
  }
  body.container .app-header {
    width: 71.25rem
  }
}

.modal-open .modal {
    overflow-x: hidden;
    overflow-y: auto;
}
.fade.in {
    opacity: 1;
}
.modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    display: none;
    overflow: hidden;
    outline: 0;
    -webkit-overflow-scrolling: touch;
}
.fade {
    opacity: 0;
    -webkit-transition: opacity .15s linear;
    -o-transition: opacity .15s linear;
    transition: opacity .15s linear;
}
.modal.in .bottom, .modal.in .left, .modal.in .right, .modal.in .top {
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
}
@media (max-width:991px){
  .app-aside .left {
      position: fixed;
      bottom: inherit;
      width: 304px;
  }
}
.modal>.left {
    left: 0;
    right: auto;
}
.modal>.left, .modal>.right {
    position: fixed;
    z-index: 1055;
    bottom: 0;
    top: 0;
}
.modal .left {
    -webkit-transform: translate3d(-100%,0,0);
    transform: translate3d(-100%,0,0);
    -webkit-transition: -webkit-transform .4s cubic-bezier(.25,.8,.25,1);
    -moz-transition: -moz-transform .4s cubic-bezier(.25,.8,.25,1);
    -o-transition: -o-transform .4s cubic-bezier(.25,.8,.25,1);
    transition: transform .4s cubic-bezier(.25,.8,.25,1);
}
.grey {
    background-color: #363c43;
}
.black, .danger, .dark, .grey, .info, .primary, .success, .warn, .warning {
    color: rgba(255,255,255,.87);
}
.navside, .navside .nav {
    border: inherit;
}
[data-layout=column], [layout=column] {
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
}

[data-layout], [layout] {
    box-sizing: border-box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;
}
.no-radius {
    border-radius: 0!important;
}
.navbar {
    border: none;
    padding: 0 1rem;
    flex-shrink: 0;
    min-height: 3.5rem;
}

.navbar {
    position: relative;
    padding: .5rem 1rem;
}
[flex] {
    overflow: auto;
}
[data-flex], [flex] {
    box-sizing: border-box;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
}

[data-flex-no-shrink], [flex-no-shrink] {
    flex-shrink: 0;
}


article, aside, details, figcaption, figure, footer, header, main, menu, nav, section, summary {
    display: block;
}

.nav-stacked .nav {
    margin: 0 8px;
}
.navside, .navside .nav {
    border: inherit;
}
.navside ul {
    padding-left: 0;
    padding-right: 0;
    list-style: none;
}
.nav, .nav-item, .nav-link {
    border: inherit;
}
.nav {
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
}
dl, ol, ul {
    margin-top: 0;
    margin-bottom: 1rem;
}
.nav-stacked .nav .nav-header {
    padding-left: 8px;
    padding-right: 8px;
}

.navside .nav li {
    border: inherit;
}
.nav-icon i, .navside .nav li {
    position: relative;
}
.navside .nav li a, .navside .nav-header {
    padding: 0 1rem;
    line-height: 2.25rem;
}

.navside .nav li a:focus, .navside .nav li a:hover, .navside .nav li.active {
    background-color: rgba(255,255,255,.065);
}
.navside .nav li {
    border: inherit;
}
.nav-icon i, .navside .nav li {
    position: relative;
}


.navside .nav li {
    border: inherit;
}
.nav-icon i, .navside .nav li {
    position: relative;
}
.nav-stacked .nav .nav-header {
    padding-left: 8px;
    padding-right: 8px;
}

.navside .nav li {
    border: inherit;
}
.nav-icon i, .navside .nav li {
    position: relative;
}
.navside .nav li a, .navside .nav-header {
    padding: 0 1rem;
    line-height: 2.25rem;
}
.m-t, .m-y {
    margin-top: 1rem;
}
.nav-active-primary .nav-link.active, .nav-active-primary .nav>li.active>a {
    color: rgba(255,255,255,.87)!important;
    background-color: #02b875!important;
}

.nav-stacked .nav>li.active>a {
    color: rgba(255,255,255,.87);
    background-color: #02b875;
}
.navside .nav li.active>a {
    background-color: transparent;
}
.nav-stacked .nav li a {
    border-radius: 3px;
}
.nav-stacked .nav>li>a {
    line-height: 1.75rem;
    padding: 0 .5rem;
    margin: 2px 0;
}
.navside .nav li a {
    display: block;
    position: relative;
}
.navside .nav li a, .navside .nav-header {
    padding: 0 1rem;
    line-height: 2.25rem;
}
a {
    cursor: pointer;
}
.navbar-brand:hover, .pagination>li>a, a, a:focus, a:hover {
    text-decoration: none;
}
a, a:focus, a:hover, button, pre {
    color: inherit;
}
.md-btn, .md-btn:focus, .mejs-container:focus, a {
    outline: 0;
}
[role=button], a, area, button, input, label, select, summary, textarea {
    -ms-touch-action: manipulation;
    touch-action: manipulation;
}


</style>
