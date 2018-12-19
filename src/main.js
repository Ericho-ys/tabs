import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import i18n from './lang'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'

import '@/styles/index.scss' 

import './permission'
import './mock' // simulation data
import './icons'

Vue.use(Element, {
  size: 'medium',
  i18n: (key, value) => i18n.t(key, value)
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  store, 
  render: h => h(App)
})
