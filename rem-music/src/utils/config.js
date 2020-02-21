import Vue from 'vue';
import 'lib-flexible/flexible.js'
import '@/assets/css/reset.css';
import Item from '@/components/Item.vue'
import axios from 'axios'
Vue.filter("format", function (val) {
    if (val.length > 5) {
        val = val.slice(0, 5) + "..."
    }
    return val
})
Vue.filter("formatTime",function(val){
    if(val){
        var minutes = parseInt((val % 3600000) / 60000);
        var seconds = parseInt((val % 60000 ) / 1000);
        if(seconds < 10){
            val= "0" + minutes + ":" + "0" + seconds;
        }else{
            val= "0" + minutes + ":" + seconds;
        }
    }
    return val
})
Vue.filter("formatCount",function(val){
    if(val){
        val = parseInt(val/10000) + "万";
    }
    return val;
})
axios.defaults.baseURL = 'https://music.aityp.com';
Vue.prototype.axios = axios;
Vue.component('Item',Item)
export default Vue;