/**
 * home相关API函数
 */
import {ajax} from '../'
import './mock'

export default {
  // 获取广告数据
  getBannerData () {
    return ajax.get('/Adv/GetAdv', {
      params: {
        advManageId: '1'
      }
    })
  },
  // 获取课程列表
  getCoursesList () {
    return ajax.get('/Course/GetCourseList', {
      params: {
        studentcode: 'C0208888999990503000009'
      }
    })
  },
  getAll () {
    return ajax.all([this.getBannerData(), this.getCoursesList()])
  }
}
