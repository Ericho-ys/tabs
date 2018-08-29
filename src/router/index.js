import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* layout component */
const layout = r => require.ensure([], () => r(require('@/views/layout/layout')), 'layout')
const charts = r => require.ensure([], () => r(require('@/views/charts/line')), 'charts')
const login  = r => require.ensure([], () => r(require('@/views/login/index')), 'login')
export const asyncRouterMap = [
  {
    path: '/charts',
    redirect: '/charts/index',
    component: layout,
    children: [
      {
        path: 'index',
        component : charts,
        name: 'charts',
        meta: { title: 'charts'}
      }
    ]
  }
]
export const constantRouterMap = [
  { path: '/login', component: login, hidden: true},
  {
    path: '',
    component: layout
  }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
