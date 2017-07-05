/**
 * axios 封装
 */
import axios from 'axios'
import {
  baseUrl
} from '@/config/env'
// import loading from '@/components/common/loading'
// import store from '@/store'
// import router from '@/router'
// const AUTH_TOKEN = 'Basic NDBmNGI2M2I0MmE2ODgzZjo5ZjUzZWU0MDUxYTk0NDcxYTE3N2FkODgwMDc0MTllMg=='

const CancelToken = axios.CancelToken
const source = CancelToken.source()
// console.log(source)
const ajax = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
  // headers: {
  //   'Authorization': AUTH_TOKEN
  // },
  cancelToken: source.token
})
// ajax.defaults.headers.common['Authorization'] = AUTH_TOKEN

// axios.defaults.baseURL = ocesUrl
// axios.defaults.timeout = 5000
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// http request 拦截器
ajax.interceptors.request.use(
  config => {
    // if (!store.state.isLogin) {
    //   // config.headers.Authorization = `token ${store.state.token}`;
    //   console.log('isNotLogin')
    //   router.push('/login')
    // }
    // console.log(loading)
    // loading.visible = true
    // showLoading
    // store.dispatch('showLoading', true)
    return config
  },
  err => {
    return Promise.reject(err)
  })

// http response 拦截器
ajax.interceptors.response.use(
  res => {
    // store.dispatch('showLoading', false)
    return res
  },
  err => {
    // if (err.response) {
    //   // switch (error.response.status) {
    //   //   case 401:
    //   //       // 401 清除token信息并跳转到登录页面
    //   //       store.commit(types.LOGOUT)
    //   //       router.replace({
    //   //           path: '/login',
    //   //           query: {redirect: router.currentRoute.fullPath}
    //   //       })
    //   // }
    // }
    // // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
    // return Promise.reject(err.response.data)
    return Promise.reject(err)
  })

export {
  ajax,
  source
}
