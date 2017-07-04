<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <h1>plugins:{{cordova}}</h1>
    <!-- <div v-for="(pluginTest, plugin) in plugins" :class="{ ok: pluginEnabled(plugin) }" @click="pluginTest">
        <span></span>{{ plugin }}
    </div> -->
  </div>
</template>

<script>
import Vue from 'vue'
import fetch from '@/config/fetch'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App111',
      cordova: Vue.cordova,
      plugins: {
        'cordova-plugin-camera': function () {
          if (!Vue.cordova.camera) {
            window.alert('Vue.cordova.camera not found !')
            return
          }
          Vue.cordova.camera.getPicture((imageURI) => {
            window.alert('Photo URI : ' + imageURI)
          }, (message) => {
            window.alert('FAILED : ' + message)
          }, {
            quality: 50,
            destinationType: Vue.cordova.camera.DestinationType.FILE_URI
          })
        }
      }
    }
  },
  mounted () {
    this.initData()
  },
  methods: {
    async initData () {
      this.msg = await fetch('/Account/User/IsUserName', {
        username: 'stu2'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
