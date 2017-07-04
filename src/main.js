// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/'
import router from './router'
import './config/rem'
import VueCordova from 'vue-cordova'
import './filter'

Vue.use(VueCordova, {
  optionTestKey: 'optionTestValue'
})

// add cordova.js only if serving the app through file://
if (window.location.protocol === 'file:' || window.location.port === '3000') {
  var cordovaScript = document.createElement('script')
  cordovaScript.setAttribute('type', 'text/javascript')
  cordovaScript.setAttribute('src', 'cordova.js')
  document.body.appendChild(cordovaScript)
}

Vue.config.productionTip = false

// Vue.use(VueRouter)
// const router = new VueRouter({
//   routers,
//   mode: routerMode
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

// const router = new VueRouter({
//   routers,
//   mode: routerMode,
//   strict: process.env.NODE_ENV !== 'production'
// })

// Vue.use(VueRouter)

// new Vue({
//   router
// }).$mount('#app')
