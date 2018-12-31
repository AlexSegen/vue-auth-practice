import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import IcFirebaseUploader from 'ic-firebase-uploader';
import 'ic-firebase-uploader/dist/ic-firebase-uploader.min.css';

Vue.component('ic-firebase-uploader', IcFirebaseUploader);

//Vendors
import 'vanilla-antd-message/dist/style.css'
import 'bulma/css/bulma.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
