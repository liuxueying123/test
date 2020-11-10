import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入css和js
import '@/assets/css/common.css'
import '@/assets/js/rem.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
