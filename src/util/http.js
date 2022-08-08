// 封装axios
import axios from 'axios'
import { Toast } from 'vant'
// function httpForList () {
//   return axios({
//     url: 'https://m.maizuo.com/gateway?cityId=320400&pageNum=1&pageSize=10&type=1&k=4935531',
//     headers: {
//       'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16420641561972824507940865"}',
//       'X-Host': 'mall.film-ticket.film.list'

//     }
//   })
// }
// function httpForDetail (params) {
//   return axios({
//     url: `https://m.maizuo.com/gateway?filmId=${params}&k=5387949`,
//     headers: {
//       'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16423102972181250680881153"}',
//       'X-Host': 'mall.film-ticket.film.info'

//     }
//   })
// }
// export default {
//   httpForList,
//   httpForDetail
// }
// 2.对于数据请求的封装
const http = axios.create({
  baseURL: 'https://m.maizuo.com',
  timeout: 10000,
  headers: {
    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16423976872241968633544705"}'

  }
})
http.interceptors.request.use(function (config) {
  Toast.loading({
    message: '加载中...',
    forbidClick: true,
    duration: 0
  })
  return config
}, function (error) {
  Toast.clear()
  return Promise.reject(error)
})
http.interceptors.response.use(function (response) {
  Toast.clear()
  return response
}, function (error) {
  Toast.clear()
  return Promise.reject(error)
})
export default http
