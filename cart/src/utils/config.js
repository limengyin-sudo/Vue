import Vue from 'vue';
import 'lib-flexible/flexible.js'
import '@/assets/css/reset.css';
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8080/';
Vue.prototype.axios = axios;
export default Vue;