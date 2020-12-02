import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './plugins/vant'
import './assets/css/common.css'
import Tabs from './components/Tabs'
import './assets/font/iconfont.css'
import './plugins/element.js'


Vue.config.productionTip = false
Vue.use(Tabs)




new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
