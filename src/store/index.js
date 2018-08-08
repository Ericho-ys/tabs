import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'

Vue.use(Vuex)

const store  = new Vuex({
  modules: {
    app,
    tagViews
  }
})
export default store