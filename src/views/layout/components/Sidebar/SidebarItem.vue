<template>
  <div v-if="!item.hidden && item.children" class="menu-wrapper">
    <router-link 
      v-if="hasOneShowingChild(item.children) && !onlyOneChild.children && !item.alwaysShow"
      :to="resolvePath(onlyOneChild.path)">
      <el-menu-item 
      :index="resolvePath(onlyOneChild.path)"
      :class="{'submenu-title-noDropdown': !isNest}" >
        <svg-icon v-if="onlyOneChild.meta&&onlyOneChild.meta.icon" :icon-class="onlyOneChild.meta.icon"></svg-icon>
        <span v-if="onlyOneChild.meta && onlyOneChild.meta.title" slot="title">{{generateTitle(onlyOneChild.meta.title)}}</span>
      </el-menu-item>
    </router-link>
    <el-submenu v-else :index="item.name || item.path">
      <template slot="title">
        <span v-if="item.mate && item.meta.title" slot="title">{{generateTitle(item.meta.title)}}</span>
      </template>
      <template v-for="child in item.children" v-if="child.hidden">
        <sidebar-item :is-nest="true" :key="child.name" v-if="child.children&&child.children.length>0" :item="child" :base-path="resolvePath(child.path)"></sidebar-item>
        <router-link v-else :key="child.name" :to="resolvePath(child.path)">
          <el-menu-item :index="resolvePath(child.path)">
            <span v-if="child.meta && child.meta.title" slot="title">{{generateTitle(child.meta.title)}}</span>
          </el-menu-item>
        </router-link>
      </template>
    </el-submenu>
  </div>
</template>

<script>
  import path from 'path'
  import { generateTitle } from '@/utils/i18n'
  export default{
    name: 'SidebarItem',
    props: {
      item: {
        type: Object,
        required: true
      },
      isNest: {
        type: Boolean,
        default: false
      },
      basePath: {
        type: String,
        default: ''
      }
    },
    data(){
      return {
        onlyOneChild: null
      }
    },
    methods: {
      hasOneShowingChild(children){
        const showingChildren = children.filter(item => {
          if(item.hidden){
            return false
          }else{
            this.onlyOneChild = item
            return true
          }
        })
        if(showingChildren.length === 1){
          return true
        }
        return false
      },
      resolvePath(...paths){
        return path.resolve(this.basePath, ...paths)
      },
      generateTitle
    }
  }
</script>
<style scoped>

</style>

