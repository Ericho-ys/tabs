import axios from 'axios'
import {message} from 'element-ui'

/* create an axios instance */
const service = axios.create({
  baseURL : process.env.BASE_API,//api的base_url
  timeout : 5000
})

// request interceptor
service.interceptors.request.use(config => {
  
})