import axios from 'axios'
//import baseUrl from '../api/baseUrl' //使用环境变量 + 模式的方式定义基础URL

//console.log("baseUrl:" + baseUrl)
// 创建 axios 实例
const service = axios.create({
  
  baseURL: '', // api 的 base_url
  timeout: 15000, // 请求超时时间
  withCredentials: true //允许携带cookie
})

export default service
