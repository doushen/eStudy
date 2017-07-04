import * as types from '../../mutation-types.js'
import {
  setStore
} from '@/config/utils'

export default {
  [types.OCES_HOME_BANNER_LIST] (state, list) {
    state.bannerList = list
    // 存入localStorage
    setStore('bannerList', state.bannerList)
    // console.log(getStore('bannerList'))
  },
  [types.OCES_HOME_COURSE_LIST] (state, list) {
    state.courseList = list
    // 存入localStorage
    // setStore('bannerList', state.bannerList)
    // console.log(getStore('bannerList'))
  }
}
