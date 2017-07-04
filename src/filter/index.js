import Vue from 'vue'

/**
 * 日期格式化
 * @param {[type]} 'dateformat' [description]
 * @param {[type]} (date,       formater      [description]
 * return {[type]}  [description]
 */
Vue.filter('dateformat', (date, formater) => {
  return 'format:' + date
})
