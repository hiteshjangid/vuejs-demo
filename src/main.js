import Vue from 'vue'
import App from './App.vue'
import router from "./router/router";
import store from "./store/vuex-store";

import "./plugins/bootstrap-vue";
 
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
