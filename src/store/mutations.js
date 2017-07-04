import * as types from './mutation-types.js'

import {
  setStore
  // getStore,
} from '../config/utils'

// import {localapi, proapi} from 'src/config/env'

export default {
  [types.OPEN_IS_LOGIN] (state, isLogin) {
    state.isLogin = isLogin
    // 存入localStorage
    setStore('isLogin', state.isLogin)
    // console.log(getStore('bannerList'))
  },
  [types.OPEN_ISLOADING] (state, isLoading) {
    state.isLoading = isLoading
  }
}
