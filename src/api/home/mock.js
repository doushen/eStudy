import {ajax} from '../'
import MockAdapter from 'axios-mock-adapter'

var mock = new MockAdapter(ajax)

mock.onGet('/Adv/GetAdv').reply(200, {
  Data: [
    {
      'Name': '学吧微信端焦点图',
      'Alt': '登录微学吧领学习积分',
      'Title': '登录微学吧领学习积分',
      'ImgUrl': 'http://itfile.open.com.cn/ITOMS/Editor/2017-06-15/e5c5933d-881d-48e1-8b9c-cb47ed26c6f5.jpg',
      'Link': 'http://mp.weixin.qq.com/s/Zfi0vFjwEmhIerDDmjqcIg',
      'Target': '_blank'
    },
    {
      'Name': '学吧微信端焦点图',
      'Alt': '官微',
      'Title': '官微',
      'ImgUrl': 'http://itfile.open.com.cn/ITOMS/Editor/2017-06-15/1c9e17e7-d6f1-48f1-8b96-a498b96eb8f4.jpg',
      'Link': 'http://mp.weixin.qq.com/s?biz=MjM5NDA0ODg0MQ==&mid=222172459&idx=1&sn=e3ae04b05c1d2d64a7d59692961fa985&scene=21#wechat_redirect',
      'Target': '_blank'
    }
  ]
})

// mock.onGet('/Course/GetCourseList').reply(200, {
//   'Success': true,
//   'Message': '',
//   'ErrCode': '',
//   'Data': [
//     {
//       'CourseID': 115,
//       'CourseName': '数字逻辑',
//       'ShowFinalGrade': '0',
//       'CreditHour': 2,
//       'coursecode': '10100057',
//       'term': 0,
//       'TeachPlanID': 222,
//       'CourseImg': 'http://file.open.com.cn/Lms/CourseImg/4.jpg',
//       'CourseWareCount': '0',
//       'CousortName': '必修',
//       'IsTrue': 'False'
//     },
//     {
//       'CourseID': 117,
//       'CourseName': '大学英语2',
//       'ShowFinalGrade': '0',
//       'CreditHour': 2,
//       'coursecode': '10100075',
//       'term': 0,
//       'TeachPlanID': 222,
//       'CourseImg': 'http://file.open.com.cn/Lms/CourseImg/29.jpg',
//       'CourseWareCount': '9',
//       'CousortName': '必修',
//       'IsTrue': 'False'
//     },
//     {
//       'CourseID': 120,
//       'CourseName': '国际经济法',
//       'ShowFinalGrade': '0',
//       'CreditHour': 2,
//       'coursecode': '006',
//       'term': 0,
//       'TeachPlanID': 222,
//       'CourseImg': 'http://file.open.com.cn/Lms/CourseImg/17.jpg',
//       'CourseWareCount': '0',
//       'CousortName': '必修',
//       'IsTrue': 'False'
//     },
//     {
//       'CourseID': 121,
//       'CourseName': '知识产权法',
//       'ShowFinalGrade': '0',
//       'CreditHour': 2,
//       'coursecode': 'ENBACE1002',
//       'term': 0,
//       'TeachPlanID': 222,
//       'CourseImg': 'http://file.open.com.cn/Lms/CourseImg/6.jpg',
//       'CourseWareCount': '0',
//       'CousortName': '必修',
//       'IsTrue': 'False'
//     },
//     {
//       'CourseID': 2863,
//       'CourseName': '应急救援概论',
//       'ShowFinalGrade': '',
//       'CreditHour': 2,
//       'coursecode': '012053',
//       'term': 0,
//       'TeachPlanID': 222,
//       'CourseImg': 'http://file.open.com.cn/Lms/CourseImg/22.jpg',
//       'CourseWareCount': '0',
//       'CousortName': '必修',
//       'IsTrue': 'False'
//     },
//     {
//       'CourseID': 116,
//       'CourseName': '组成原理',
//       'ShowFinalGrade': '',
//       'CreditHour': 2,
//       'coursecode': '10100064',
//       'term': 0,
//       'TeachPlanID': 222,
//       'CourseImg': 'http://file.open.com.cn/Lms/CourseImg/20.jpg',
//       'CourseWareCount': '0',
//       'CousortName': '必修',
//       'IsTrue': 'False'
//     },
//     {
//       'CourseID': 117632,
//       'CourseName': '国产办公软件',
//       'ShowFinalGrade': '',
//       'CreditHour': 2,
//       'coursecode': 'gcbgrj',
//       'term': 0,
//       'TeachPlanID': 222,
//       'CourseImg': 'http://file.open.com.cn/Lms/CourseImg/15.jpg',
//       'CourseWareCount': '0',
//       'CousortName': '必修',
//       'IsTrue': 'False'
//     },
//     {
//       'CourseID': 117644,
//       'CourseName': '国产Linux基础知识',
//       'ShowFinalGrade': '',
//       'CreditHour': 2,
//       'coursecode': 'linuxjczs',
//       'term': 0,
//       'TeachPlanID': 222,
//       'CourseImg': 'http://file.open.com.cn/Lms/CourseImg/21.jpg',
//       'CourseWareCount': '0',
//       'CousortName': '必修',
//       'IsTrue': 'False'
//     },
//     {
//       'CourseID': 117646,
//       'CourseName': '国产数据库高级应用-达梦',
//       'ShowFinalGrade': '',
//       'CreditHour': 2,
//       'coursecode': 'dameng2',
//       'term': 0,
//       'TeachPlanID': 222,
//       'CourseImg': 'http://file.open.com.cn/Lms/CourseImg/28.jpg',
//       'CourseWareCount': '0',
//       'CousortName': '选修',
//       'IsTrue': 'False'
//     },
//     {
//       'CourseID': 117650,
//       'CourseName': '国产数据库基础知识-神通',
//       'ShowFinalGrade': '',
//       'CreditHour': 2,
//       'coursecode': 'shentong1',
//       'term': 0,
//       'TeachPlanID': 222,
//       'CourseImg': 'http://file.open.com.cn/Lms/CourseImg/19.jpg',
//       'CourseWareCount': '0',
//       'CousortName': '选修',
//       'IsTrue': 'False'
//     },
//     {
//       'CourseID': 117634,
//       'CourseName': '国产数据库高级应用-神通',
//       'ShowFinalGrade': '',
//       'CreditHour': 2,
//       'coursecode': 'shentong2',
//       'term': 0,
//       'TeachPlanID': 222,
//       'CourseImg': 'http://file.open.com.cn/Lms/CourseImg/6.jpg',
//       'CourseWareCount': '0',
//       'CousortName': '选修',
//       'IsTrue': 'False'
//     },
//     {
//       'CourseID': 117649,
//       'CourseName': '国产数据库高级应用-人大金仓',
//       'ShowFinalGrade': '',
//       'CreditHour': 2,
//       'coursecode': 'kingbase2',
//       'term': 0,
//       'TeachPlanID': 222,
//       'CourseImg': 'http://file.open.com.cn/Lms/CourseImg/24.jpg',
//       'CourseWareCount': '0',
//       'CousortName': '选修',
//       'IsTrue': 'False'
//     },
//     {
//       'CourseID': 117652,
//       'CourseName': 'J2EE开发',
//       'ShowFinalGrade': '',
//       'CreditHour': 2,
//       'coursecode': 'j2ee',
//       'term': 0,
//       'TeachPlanID': 222,
//       'CourseImg': 'http://file.open.com.cn/Lms/CourseImg/2.jpg',
//       'CourseWareCount': '0',
//       'CousortName': '选修',
//       'IsTrue': 'False'
//     },
//     {
//       'CourseID': 2219,
//       'CourseName': '毕业论文指导课1',
//       'ShowFinalGrade': '',
//       'CreditHour': 1,
//       'coursecode': '701',
//       'term': 0,
//       'TeachPlanID': 222,
//       'CourseImg': 'http://file.open.com.cn/Lms/CourseImg/23.jpg',
//       'CourseWareCount': '0',
//       'CousortName': '必修',
//       'IsTrue': 'False'
//     },
//     {
//       'CourseID': 117633,
//       'CourseName': '国产Linux服务器高级系统管理',
//       'ShowFinalGrade': '',
//       'CreditHour': 2,
//       'coursecode': 'linuxserver',
//       'term': 0,
//       'TeachPlanID': 222,
//       'CourseImg': 'http://file.open.com.cn/Lms/CourseImg/21.jpg',
//       'CourseWareCount': '0',
//       'CousortName': '选修',
//       'IsTrue': 'False'
//     },
//     {
//       'CourseID': 119,
//       'CourseName': '刑法学',
//       'ShowFinalGrade': '',
//       'CreditHour': 2,
//       'coursecode': '005',
//       'term': 0,
//       'TeachPlanID': 222,
//       'CourseImg': 'http://file.open.com.cn/Lms/CourseImg/30.jpg',
//       'CourseWareCount': '0',
//       'CousortName': '必修',
//       'IsTrue': 'False'
//     }
//   ],
//   'StartTime': '2017/6/24 15:01:07.902',
//   'EndTime': '2017/6/24 15:01:08.292'
// })

mock.onGet('/Adv/GetAdv').reply(function (config) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      // if (Math.random() > 0.1) {
      resolve([200, {
        'Success': true,
        'Message': '',
        'ErrCode': '',
        'Data': [
          {
            'CourseID': 115,
            'CourseName': '数字逻辑',
            'ShowFinalGrade': '0',
            'CreditHour': 2,
            'coursecode': '10100057',
            'term': 0,
            'TeachPlanID': 222,
            'CourseImg': 'http://file.open.com.cn/Lms/CourseImg/4.jpg',
            'CourseWareCount': '0',
            'CousortName': '必修',
            'IsTrue': 'False'
          },
          {
            'CourseID': 117,
            'CourseName': '大学英语2',
            'ShowFinalGrade': '0',
            'CreditHour': 2,
            'coursecode': '10100075',
            'term': 0,
            'TeachPlanID': 222,
            'CourseImg': 'http://file.open.com.cn/Lms/CourseImg/29.jpg',
            'CourseWareCount': '9',
            'CousortName': '必修',
            'IsTrue': 'False'
          },
          {
            'CourseID': 120,
            'CourseName': '国际经济法',
            'ShowFinalGrade': '0',
            'CreditHour': 2,
            'coursecode': '006',
            'term': 0,
            'TeachPlanID': 222,
            'CourseImg': 'http://file.open.com.cn/Lms/CourseImg/17.jpg',
            'CourseWareCount': '0',
            'CousortName': '必修',
            'IsTrue': 'False'
          },
          {
            'CourseID': 121,
            'CourseName': '知识产权法',
            'ShowFinalGrade': '0',
            'CreditHour': 2,
            'coursecode': 'ENBACE1002',
            'term': 0,
            'TeachPlanID': 222,
            'CourseImg': 'http://file.open.com.cn/Lms/CourseImg/6.jpg',
            'CourseWareCount': '0',
            'CousortName': '必修',
            'IsTrue': 'False'
          },
          {
            'CourseID': 2863,
            'CourseName': '应急救援概论',
            'ShowFinalGrade': '',
            'CreditHour': 2,
            'coursecode': '012053',
            'term': 0,
            'TeachPlanID': 222,
            'CourseImg': 'http://file.open.com.cn/Lms/CourseImg/22.jpg',
            'CourseWareCount': '0',
            'CousortName': '必修',
            'IsTrue': 'False'
          },
          {
            'CourseID': 116,
            'CourseName': '组成原理',
            'ShowFinalGrade': '',
            'CreditHour': 2,
            'coursecode': '10100064',
            'term': 0,
            'TeachPlanID': 222,
            'CourseImg': 'http://file.open.com.cn/Lms/CourseImg/20.jpg',
            'CourseWareCount': '0',
            'CousortName': '必修',
            'IsTrue': 'False'
          },
          {
            'CourseID': 117632,
            'CourseName': '国产办公软件',
            'ShowFinalGrade': '',
            'CreditHour': 2,
            'coursecode': 'gcbgrj',
            'term': 0,
            'TeachPlanID': 222,
            'CourseImg': 'http://file.open.com.cn/Lms/CourseImg/15.jpg',
            'CourseWareCount': '0',
            'CousortName': '必修',
            'IsTrue': 'False'
          },
          {
            'CourseID': 117644,
            'CourseName': '国产Linux基础知识',
            'ShowFinalGrade': '',
            'CreditHour': 2,
            'coursecode': 'linuxjczs',
            'term': 0,
            'TeachPlanID': 222,
            'CourseImg': 'http://file.open.com.cn/Lms/CourseImg/21.jpg',
            'CourseWareCount': '0',
            'CousortName': '必修',
            'IsTrue': 'False'
          },
          {
            'CourseID': 117646,
            'CourseName': '国产数据库高级应用-达梦',
            'ShowFinalGrade': '',
            'CreditHour': 2,
            'coursecode': 'dameng2',
            'term': 0,
            'TeachPlanID': 222,
            'CourseImg': 'http://file.open.com.cn/Lms/CourseImg/28.jpg',
            'CourseWareCount': '0',
            'CousortName': '选修',
            'IsTrue': 'False'
          },
          {
            'CourseID': 117650,
            'CourseName': '国产数据库基础知识-神通',
            'ShowFinalGrade': '',
            'CreditHour': 2,
            'coursecode': 'shentong1',
            'term': 0,
            'TeachPlanID': 222,
            'CourseImg': 'http://file.open.com.cn/Lms/CourseImg/19.jpg',
            'CourseWareCount': '0',
            'CousortName': '选修',
            'IsTrue': 'False'
          },
          {
            'CourseID': 117634,
            'CourseName': '国产数据库高级应用-神通',
            'ShowFinalGrade': '',
            'CreditHour': 2,
            'coursecode': 'shentong2',
            'term': 0,
            'TeachPlanID': 222,
            'CourseImg': 'http://file.open.com.cn/Lms/CourseImg/6.jpg',
            'CourseWareCount': '0',
            'CousortName': '选修',
            'IsTrue': 'False'
          },
          {
            'CourseID': 117649,
            'CourseName': '国产数据库高级应用-人大金仓',
            'ShowFinalGrade': '',
            'CreditHour': 2,
            'coursecode': 'kingbase2',
            'term': 0,
            'TeachPlanID': 222,
            'CourseImg': 'http://file.open.com.cn/Lms/CourseImg/24.jpg',
            'CourseWareCount': '0',
            'CousortName': '选修',
            'IsTrue': 'False'
          },
          {
            'CourseID': 117652,
            'CourseName': 'J2EE开发',
            'ShowFinalGrade': '',
            'CreditHour': 2,
            'coursecode': 'j2ee',
            'term': 0,
            'TeachPlanID': 222,
            'CourseImg': 'http://file.open.com.cn/Lms/CourseImg/2.jpg',
            'CourseWareCount': '0',
            'CousortName': '选修',
            'IsTrue': 'False'
          },
          {
            'CourseID': 2219,
            'CourseName': '毕业论文指导课1',
            'ShowFinalGrade': '',
            'CreditHour': 1,
            'coursecode': '701',
            'term': 0,
            'TeachPlanID': 222,
            'CourseImg': 'http://file.open.com.cn/Lms/CourseImg/23.jpg',
            'CourseWareCount': '0',
            'CousortName': '必修',
            'IsTrue': 'False'
          },
          {
            'CourseID': 117633,
            'CourseName': '国产Linux服务器高级系统管理',
            'ShowFinalGrade': '',
            'CreditHour': 2,
            'coursecode': 'linuxserver',
            'term': 0,
            'TeachPlanID': 222,
            'CourseImg': 'http://file.open.com.cn/Lms/CourseImg/21.jpg',
            'CourseWareCount': '0',
            'CousortName': '选修',
            'IsTrue': 'False'
          },
          {
            'CourseID': 119,
            'CourseName': '刑法学',
            'ShowFinalGrade': '',
            'CreditHour': 2,
            'coursecode': '005',
            'term': 0,
            'TeachPlanID': 222,
            'CourseImg': 'http://file.open.com.cn/Lms/CourseImg/30.jpg',
            'CourseWareCount': '0',
            'CousortName': '必修',
            'IsTrue': 'False'
          }
        ],
        'StartTime': '2017/6/24 15:01:07.902',
        'EndTime': '2017/6/24 15:01:08.292'
      }])
      // } else {
      //   // reject() reason will be passed as-is.
      //   // Use HTTP error status code to simulate server failure.
      //   resolve([500, { success: false } ]);
      // }
    }, 1000)
  })
})
