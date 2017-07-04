/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * ocesUrl: oces域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 *
 */

let baseUrl = ''
let ocesUrl = ''
let routerMode = 'history'
let imgBaseUrl = ''

if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://10.100.134.79:8889/api/'
  ocesUrl = 'http://10.100.134.79:8889/api/'
  routerMode = ''
  imgBaseUrl = ''
} else if (process.env.NODE_ENV === 'production') {
  baseUrl = 'http://10.100.134.79:8889/api/'
  ocesUrl = 'http://10.100.134.79:8889/api/'
  routerMode = ''
  imgBaseUrl = ''
}

export {
  baseUrl,
  ocesUrl,
  routerMode,
  imgBaseUrl
}
