import loginApi from '@/api/login'
import * as types from './mutation-types.js'

export default {
  async login ({commit, state}, user, pwd) {
    let res = await loginApi.login(user, pwd)
    commit(types.OPEN_IS_LOGIN, res.data.Success)
  },
  async showLoading ({commit, state}, isLoading) {
    commit(types.OPEN_ISLOADING, isLoading)
  }
}
