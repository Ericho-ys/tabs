import Cookies from 'js-cookie'
import {
  TOGGLE_SIDEBAR,
  CLOSE_SIDEBAR,
  TOGGLE_DEVICE,
  SET_LANGUAGE
} from '../mutation-types'
const app = {
  state: {
    sidebar: {
      opened: !+Cookies.get('sidebarStatus'),
      withoutAnimation: false
    },
    device: 'destop',
    language: Cookies.get('language') || 'en'
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      if (state.sliderBar.opened) {
        Cookies.set('sidebarStatus', 1)
      } else {
        Cookies.set('sidebarStatus', 0)
      }
      state.sidebar.opened = !state.sliderBar.opened
      state.sidebar.withoutAnimation = false
    },
    CLOSE_SIDEBAR: (state, withoutAnimation) => {
      Cookies.set('sidebarStatus', 1)
      state.sidebar.opened = false
      state.sidebar.withoutAnimation = withoutAnimation
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
    toggleSideBar({
      commit
    }) {
      commit(TOGGLE_SIDEBAR)
    },
    closeSideBar({
      commit
    }, {
      withoutAnimation
    }) {
      commit(CLOSE_SIDEBAR, withoutAnimation)
    },
    toggleDevice({
      commit
    }, device) {
      commit(TOGGLE_DEVICE, device)
    },
    setLanguage({
      commit
    }, language) {
      commit(SET_LANGUAGE, language)
    }
  }
}
export default app
