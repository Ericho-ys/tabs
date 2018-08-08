<template>
  <div class="app-wrapper">
    <div v-if="device === 'mobile'&&slidebar.opened" class="drawer-bg" @click="handleClickOutside"></div>
    <slidebar class="sidebar-container"></slidebar>
    <div class="main-container">
      <navbar></navbar>
      <tags-view></tags-view>
      <app-main></app-main>
    </div>
  </div>
</template>
<script>
  import {Navbar, Slidebar, AppMain, TagsView} from './components'
  import resizeMixin from './mixin/resizeHandler'

  export default {
    name: 'layout',
    components: {
      Navbar,
      Slidebar,
      AppMain,
      TagsView
    },
    mixins: [resizeMixin],
    computed: {
      slidebar(){
        return this.$store.state.app.sliderBar
      },
      device(){
        return this.$store.state.app.device
      },
      classObj(){
        return {
          hideSidebar: !this.slidebar.opened,
          openSidebar: this.slidebar.opened,
          withoutAnimation: this.slidebar.withoutAnimation,
          mobile: this.device === 'mobile'
        }
      }
    },
    methods: {
      handleClickOutside() {
        this.$store.dispatch('closeSlideBar', {withoutAnimation: false})
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    &.mobile.openSidebar{
      position: fixed;
      top: 0;
    }
  }
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }
</style>