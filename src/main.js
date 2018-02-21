import Vue from 'vue'
import App from './App.vue'
import router from './router'
import layoutFooter from './components/layout/footer'
import Agile from './Agile.vue'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.component( 'layout-footer', layoutFooter)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
