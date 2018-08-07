import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router/index'
import {navMenu} from 'element-ui'
import VueRouter from 'vue-router';

Vue.use(navMenu)
Vue.use(VueRouter)
Vue.config.productionTip = false

/* regist router */
const router = new VueRouter({
  routes,
  mode: 'history',
  /* 定义路由切换时的页面滚动行为 */
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
  } else {
    if (from.meta.keepAlive) {
      /* 如果是缓存组建，则记录下，组件当前滚动的位置 */
      from.meta.savedPosition = document.body.scrollTop;
    }
      return { x: 0, y: to.meta.savedPosition ||0}
  }
}

})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router
})
