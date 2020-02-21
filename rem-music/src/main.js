import Vue from 'vue';
import App from './App.vue';
import router from './routers';
import './utils/config.js';
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.config.productionTip = false
Vue.use(Vant);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')