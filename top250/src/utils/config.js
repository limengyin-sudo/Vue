import Vue from 'vue';
Vue.filter("format", function (val) {
    if (val.length > 5) {
        val = val.slice(0, 5) + "..."
    }
    return val
})
Vue.filter("formatFilms", function (val) {
    if (val.length > 10) {
        val = val.slice(0, 10) + "..."
    }
    return val
})
export default Vue;