import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import firebase from 'firebase'
import config from './firebase.config'

firebase.initializeApp(config)

//Vendors
import 'vanilla-antd-message/dist/style.css'
import 'bulma/css/bulma.css'
import 'bulma-pageloader/dist/css/bulma-pageloader.min.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
