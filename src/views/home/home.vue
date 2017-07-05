<template>
  <div class="home">
    <bannerCtrl></bannerCtrl>
    <div class="my_course" style="padding:0">
        <p class="title">我的课程</p>
        <ul class="course_list">
            <li v-for="item in Data">
                <a href="#">
                    <img class="title_pic" :src="item.CourseImg">
                    <div class="course_detail">
                        <h2>{{item.CourseName}}</h2>
                        <div class="course_selective">
                            <p>
                                <i class="icon iconfont icon-app-learned"></i>
                                <span>{{item.CreditHour}}</span>讲
                            </p>
                            <p>
                                <i class="icon iconfont icon-app-obligatory"></i>
                                <span>{{item.CousortName}}</span>
                            </p>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    </div>
    <!-- <transition name="loading-fade" mode="out-in">
      <loading v-show="showLoading"></loading>
    </transition> -->
    <!-- <footerCtrl></footerCtrl> -->
  </div>
</template>

<script>
import bannerCtrl from '@/components/common/bannerCtrl'
// import footerCtrl from '@/components/footer/footerCtrl'
// import homeData from '@/api/oces/home'
// import loading from '@/components/common/loading'

export default {
  name: 'home',
  components: {
    // footerCtrl,
    // loading,
    bannerCtrl
  },
  data () {
    return {
      Data: []
    }
  },
  mounted () {
    // this.$store.dispatch('showLoading', true) // 显示加载中动画
    this.$store.dispatch('getCourseList').then(() => {
      this.Data = this.$store.state.oces.courseList.Data
      // this.$store.dispatch('showLoading', false)  // 隐藏加载中动画
    })
  }
}
</script>

<style lang='scss' scoped>
@import '../../style/mixin';
.home {
  padding-bottom: 1.95rem;
}
.my_course {
  overflow: auto;
}
.my_course .course_list{
    padding:0 10px;
    margin:0;
}
.my_course .course_list li{
  padding: 15px 0;
    list-style:none;
    margin-left:10px;
}
.my_course .course_list li a{
    display:block;
}
.my_course .course_list li img{
  width: 35%;
    margin-right:10px;
  display: inline-block;
}
.my_course .course_detail{
  width: 59%;
  vertical-align: top;
  display: inline-block;
}
.my_course .course_detail h2{
      font-size: 16px;
    margin: 0;
    margin-bottom: 10%;
    color: #333;
    padding-top: 0px;
    font-weight: normal;
}
.my_course .course_tongkao .course_detail h2{
  font-size: 14pt;
    margin:0;
  margin-bottom: 10%;
    color:#333;
}
.my_course .course_selective{
    color:#929292;
}
.my_course .course_detail .course_selective p{
  width: 35%;
  text-align: left;
  display: inline-block;
  font-size:14px;
  color: #949494;
    margin:0;
    margin-right:5px;
  margin-top: 5px;
}
.my_course .course_detail .course_selective a i{
  font-size: 16px;
}
</style>
