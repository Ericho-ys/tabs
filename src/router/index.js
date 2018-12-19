import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* layout component */
const layout = r => require.ensure([], () => r(require('@/views/layout/layout')), 'layout')
const charts = r => require.ensure([], () => r(require('@/views/charts/line')), 'charts')
const login  = r => require.ensure([], () => r(require('@/views/login/index')), 'login')
const dashboard = r => require.ensure([], () => r(require('@/views/dashboard/index')), 'dashboard')
export const asyncRouterMap = [
  
]
export const constantRouterMap = [
  { path: '/login', component: login, hidden: true},
  {
    path: '',
    redirect: 'dashboard',
    component: layout,
    children: [
      {
        path: 'dashboard',
        component : dashboard,
        name: 'dashboard',
        meta: { title: 'dashboard', icon: 'dashboard', noCache: true}
      }
    ]
  }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
