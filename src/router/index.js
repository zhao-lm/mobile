import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login'  //引入登录页面
Vue.use(Router);
// 需要左方向动画的路由用this.$router.to('****')
Router.prototype.togo = function (path) {
  this.isleft = true
  this.isright = false
  this.push(path)
}
// 需要右方向动画的路由用this.$router.goRight('****')
Router.prototype.goRight = function (path) {
  this.isright = true
  this.isleft = false
  this.push(path)
}
// 需要返回按钮动画的路由用this.$router.goBack()，返回上一个路由
Router.prototype.goBack = function () {
  this.isright = true
  this.isleft = false
  this.go(-1)
}
// 点击浏览器返回按钮执行，此时不需要路由回退
Router.prototype.togoback = function () {
  this.isright = true
  this.isleft = false
}
// 点击浏览器前进按钮执行
Router.prototype.togoin = function () {
  this.isright = false
  this.isleft = true
}
export default new Router({
  routes: [
    { //登录页路由
      path: '/',
      name: 'Login',
      component: Login
    },
    { //引导页1
      path: '/login/guide1',
      name: 'Guide1',
      component: (resolve) => require(['@/pages/login/guide1'], resolve),
    },
    { //引导页2
      path: '/login/guide2',
      name: 'Guide2',
      component: (resolve) => require(['@/pages/login/guide2'], resolve),
    },
    {
      path: '/',
      name: 'index',
      component: (resolve) => require(['@/pages/index'], resolve),
      redirect: 'index/home',
      children: [{
          path: '/home',
          name: 'home',
          component: (resolve) => require(['@/pages/index/home'], resolve)
        },
        {
          path: '/story',
          name: 'story',
          component: (resolve) => require(['@/pages/index/story'], resolve)
        },
        {
          path: '/footprints',
          name: 'footprints',
          component: (resolve) => require(['@/pages/index/footprints'], resolve)
        },
        {
          path: '/day',
          name: 'day',
          component: (resolve) => require(['@/pages/index/day'], resolve)
        }
      ]
    },
    { //采购详情
      path: '/Home/Detail',
      name: 'Detail',
      component: (resolve) => require(['@/pages/common/detail'], resolve)
    },
    { //采购申请
      path: '/Home/purchase',
      name: 'purchase',
      component: (resolve) => require(['@/pages/common/purchase'], resolve)
    },
    { //我的消息
      path: '/Footprints/tidings',
      name: 'tidings',
      component: (resolve) => require(['@/pages/information/tidings'], resolve)
    },
    { //仓库选品
      path: '/Story/storehouse',
      name: 'storehouse',
      component: (resolve) => require(['@/pages/story/storehouse'], resolve)
    },
    {  //首页选品
        path: '/Home/procurement',
        name: 'procurement',
        component: (resolve) => require(['@/pages/common/procurement'], resolve)
    },
    // 选择品牌
    {
      path: '/selection/selectBrand',
      name: 'selectBrand',
      component: (resolve) => require(['@/pages/selection/selectBrand'], resolve)
    },
    // 合同验证
    {
      path: '/selection/selectContract',
      name: 'selectContract',
      component: (resolve) => require(['@/pages/selection/selectContract'], resolve)
    },
    //选择仓库
    {
      path: '/selection/slectWare',
      name: 'selectWare',
      component: (resolve) => require(['@/pages/selection/selectWare'], resolve)
    },
     //确认采购信息
    {
      path: '/selection/selectConfirm',
      name: 'selectConfirm',
      component: (resolve) => require(['@/pages/selection/selectConfirm'], resolve)
    },
    //采购成功
    {
      path: '/selection/selectSuccess',
      name: 'selectSuccess',
      component: (resolve) => require(['@/pages/selection/selectSuccess'], resolve)
    },
    //详情页面
    {
      path: '/selection/selectInfo',
      name: 'selectInfo',
      component: (resolve) => require(['@/pages/selection/selectInfo'], resolve)
    },
    { //运单信息
      path: '/Logistics/loglist',
      name: 'loglist',
      component: (resolve) => require(['@/pages/logistics/loglist'], resolve)
    },
    { //评价运单
      path: '/Logistics/evaluate',
      name: 'evaluate',
      component: (resolve) => require(['@/pages/logistics/evaluate'], resolve)
    },
    { //评价提交
      path: '/Logistics/loginsuccess',
      name: 'loginsuccess',
      component: (resolve) => require(['@/pages/logistics/loginsuccess'], resolve)
    },
    { //订单详情
      path: '/Logistics/logDetail',
      name: 'logDetail',
      component: (resolve) => require(['@/pages/logistics/logDetail'], resolve)
    }
  ]
})
