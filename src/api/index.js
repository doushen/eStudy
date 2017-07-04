/**
 * axios 默认参数配置
 */
import axios from 'axios'
import { baseUrl } from '@/config/env'

const AUTH_TOKEN = 'Basic NDBmNGI2M2I0MmE2ODgzZjo5ZjUzZWU0MDUxYTk0NDcxYTE3N2FkODgwMDc0MTllMg=='
axios.defaults.baseURL = baseUrl
axios.defaults.timeout = 5000
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// http request 拦截器
axios.interceptors.request.use(
config => {
  // if (store.state.token) {
  //   config.headers.Authorization = `token ${store.state.token}`;
  // }
  return config
},
err => {
  return Promise.reject(err)
})

// http response 拦截器
axios.interceptors.response.use(
res => {
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
  axios as ajax
}
