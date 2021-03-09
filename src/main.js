// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import store from './store'

import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
console.log("process.env"+process.env)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
