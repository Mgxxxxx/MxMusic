import Vue from 'vue'
// import Mint from 'mint-ui'
// import 'mint-ui/lib/style.css'
import vuetify from '@/plugins/vuetify'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from "@/router"
import store from "@/store"
// import './styles/index.scss'

Vue.config.productionTip = false

// Vue.use(ElementUI)
// Vue.use(Mint)

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
