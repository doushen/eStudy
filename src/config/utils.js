/**
 * 工具
 */
import Cookie from 'js-cookie'

/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}

/**
 * 获取localStorage
 */
export const getStore = name => {
  if (!name) return
  return window.localStorage.getItem(name)
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
  if (!name) return
  window.localStorage.removeItem(name)
}

/**
 * 存储cookie
 */
export const setCookie = (name, value, options = {}) => {
  Cookie.set(name, encodeURIComponent(value), options)
}

/**
 * 获取cookie
 */
export const getCookie = name => {
  return decodeURIComponent(Cookie.get(name))
}

/**
 * 删除cookie
 */
export const removeCookie = name => {
  Cookie.remove(name)
}
