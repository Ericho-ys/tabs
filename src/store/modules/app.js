import Cookies from 'js-cookie'
import {TOGGLE_SIDEBAR, CLOSE_SIDEBAR, TOGGLE_DEVICE, SET_LANGUAGE} from '../mutation-types'
const app = {
  state: {
    sliderBar: {
      opened : !+ Cookies.get('sliderBarStatus'),
      withoutAnimation: false
    },
    device: 'destop',
    language: Cookies.get('language') || 'en'
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      if(state.sliderBar.opened){
        Cookies.set('sliderBarStatus', 1)
      }else{
        Cookies.set('sliderBarStatus', 0)
      }
      state.sliderBar.opened = !state.sliderBar.opened
      state.sliderBar.withoutAnimation = false
    },
    CLOSE_SIDEBAR: (state, withoutAnimation) => {
      Cookies.set('sliderBarStatus', 1)
      state.sliderBar.opened = false
      state.sliderBar.withoutAnimation = withoutAnimation
    },
    TOGGLE_DEVICE: (state, device) => {
      state.device = device
    },
    SET_LANGUAGE: (state, language) => {
      state.language = language
      Cookies.set('language', language)
    }
  },
  actions: {
    toggleSideBar({commit}) {
      commit(TOGGLE_SIDEBAR)
    },
    closeSlideBar({commit}, {withoutAnimation}){
      commit(CLOSE_SIDEBAR, withoutAnimation)
    },
    toggleDevice({commit}, device){
      commit(TOGGLE_DEVICE, device)
    },
    setLanguage({commit}, language){
      commit(SET_LANGUAGE, language)
    }
  }
}
export  default app