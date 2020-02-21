import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Button } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import { Loading } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Icon } from 'vant';
import { IndexBar, IndexAnchor } from 'vant';
import { List } from 'vant';
import { PullRefresh } from 'vant';
Vue.use(Button);
Vue.use(Tabbar).use(TabbarItem);
Vue.use(Loading);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Icon);
Vue.use(IndexBar).use(IndexAnchor);
Vue.use(List);
Vue.use(PullRefresh);
Vue.config.productionTip = false
import './utils/config.js';
import axios from 'axios'
// axios.defaults.baseURL = 'https://douban-api.uieee.com/';
axios.defaults.baseURL = 'https://douban.uieee.com/';
Vue.prototype.axios = axios;
import store from './store'
axios.interceptors.request.use(function (config) {
  store.state.isLoading = true;
  return config;
});
axios.interceptors.response.use(function (response) {
  store.state.isLoading = false;
  return response;
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
