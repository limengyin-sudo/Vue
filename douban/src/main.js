import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import '@/assets/css/reset.css'
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);
Vue.config.productionTip = false
Vue.prototype.axios = axios;
Vue.filter("format", function (val) {
  if (val.length > 65) {
      val = val.slice(0, 65) + "..."
  }
  return val
})
Vue.filter("formatStar", function (val) {
  if (val) {
      val = Math.round(val)/2
  }
  return val
})
Vue.filter("formatName", function (val) {
  if (val.length > 5) {
      val = val.slice(0, 5) + "..."
  }
  return val
})
Vue.filter("formatCount", function (val) {
  if (val>10000) {
      val = parseInt(val/10000) + "万"
  }
  return val
})
Vue.filter("formatList", function (val) {
  if (val.length > 10) {
      val = val.slice(0, 10) + "..."
  }
  return val
})
import VueAMap from 'vue-amap';
Vue.use(VueAMap);
import { Rate } from 'vant';
Vue.use(Rate);
VueAMap.initAMapApiLoader({
  key: '4d24450e1f8b72ba5854d1dc97c59592',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  v: '1.4.4'
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
