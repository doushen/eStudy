export default {
  bannerListCount: state => {
    let count = 0
    if (state.bannerList.Data) {
      count = state.bannerList.Data.length
    }
    return count
  }
}
