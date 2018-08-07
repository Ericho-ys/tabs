import axios from 'axios'
import {message} from 'element-ui'

/* create an axios instance */
const service = axios.create({
  baseURL : process.env.BASE_API,//api的base_url
  timeout : 5000
})

// request interceptor
service.interceptors.request.use(config => {
  // if vuex has token, set http with token, before request is send, token is from vuex
  
}, error => {
  console.log(error)
  Promise.reject(error)
})

// respone interceptor
service.interceptors.response.use(
  response => response,
  error => {
    console.log(error)
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)
export default service
