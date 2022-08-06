import Vue from 'vue'
import App from './app'
import './static/libs/font-awesome/css/all.min.css'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
