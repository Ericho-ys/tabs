import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import permission from './modules/permission'
import tagViews from './modules/tagViews'
import getters from './getters'

Vue.use(Vuex)

const store  = new Vuex.Store({
  modules: {
    app,
    tagViews,
    user,
    permission
  },
  getters
})
export default store