// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 在项目中使用element-ui：
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import store from './store' //引入 Vuex 状态管理

import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  render: h => h(App),
  router, //使用路由配置
  store //使用 Vuex 进行状态管理
}).$mount('#app')
