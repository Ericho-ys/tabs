import {
  asyncRouterMap
} from '@/router'
import {SET_ROUTERS} from '../mutation-types'
/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */

function hasPermission(roles, route) {
    if(route.meta && route.meta.roles) {
        return roles.some(role => route.meta.roles.indexOf(role))
    }else{
        return true
    }
}
/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param asyncRouterMap
 * @param roles
 */
function filterAsyncRouter(asyncRouterMap, roles) {
    const accessRouters = asyncRouterMap.filter(route => {
        if(hasPermission(roles, route)) {
            if(route.children && route.children.length) {
                route.children = filterAsyncRouter(route.children, roles)
            }
            return true
        }
        return false
    })
    return accessRouters
}

const permission = {
    state: {
        routers: asyncRouterMap,
        addRouters: []
    },
    mutations: {
        SET_ROUTERS: (state, routers) => {
            state.addRouters = routers
        }
    },
    actions: {
        GenerateRoutes({commit}, data){
            return new Promise(resolve => {
                const {roles} = data
                let accessRouters
                if(roles.indexOf('admin') >= 0){
                    accessRouters = asyncRouterMap
                }else{
                    accessRouters = filterAsyncRouter(asyncRouterMap, roles)
                }
                commit(SET_ROUTERS, accessRouters)
                resolve()
            })
        }
    }
}