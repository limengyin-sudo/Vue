import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
export default new Router({
    mode:"hash",
    routes:[{
            path:'/cart',
            name:'cart',
            component:()=>import('@/views/Cart/Index')
        },{
            path:'/todoList',
            name:'todoList',
            component:()=>import('@/views/TodoList/Index')
        },{
            path:'/tang',
            name:'tang',
            component:()=>import('@/views/Tang/Index')
        },{
            path:'/tangDetail',
            name:'tangDetail',
            component:()=>import('@/views/TangDetail/Index')
        },{
            path:'/search',
            name:'search',
            component:()=>import('@/views/Search/Index')
        }
    ]
})