import Vue from 'vue'
import App from './App.vue'
import store from '@/store/index'
import './mock/mockServer'
import router from '@/router/index'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this //安裝全局事件總線
  },
  store,
  router,
}).$mount('#app')
