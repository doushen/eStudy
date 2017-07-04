import home from '@/api/oces/home'
import * as types from '../../mutation-types.js'

export default {
  async getBannerList ({commit, state}) {
    let res = await home.getBannerData()
    commit(types.OCES_HOME_BANNER_LIST, res.data)
  },
  async getCourseList ({commit, state}) {
    let res = await home.getCoursesList()
    commit(types.OCES_HOME_COURSE_LIST, res.data)
  }
}
