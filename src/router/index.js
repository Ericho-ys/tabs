import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* layout component */
const layout = r => require.ensure([], () => r(require('@/views/layout/layout')), 'home')

const asyncRouterMap = [
  {
    path: '/charts',
    component: layout
  }
]
