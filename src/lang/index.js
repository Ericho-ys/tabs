import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookie from 'js-cookie'
import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'// element-ui lang
import enLocal from './en'
import zhLocal from './ch'

Vue.use(VueI18n)

const messages = {
  en: {
    ...enLocal,
    ...elementEnLocale
  },
  zh: {
    ...zhLocal,
    ...elementZhLocale
  }
}

const i18n = new VueI18n({
  // set locale
  // options: en or zh
  locale: Cookie.get('language') || 'en',
  // set locale messages
  messages
})

export default i18n