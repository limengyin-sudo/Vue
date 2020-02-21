import Vue from 'vue'
import Router from 'vue-router'
import Music from '@/views/Music/Index'
import Mv from '@/views/Mv/Index'
Vue.use(Router);
export default new Router({
    mode:"hash",
    routes:[{
            path:'/music',
            name:'music',
            component:Music
        },{
            path:'/MusicDetail',
            name:"MusicDetail",
            component:()=>import('@/views/MusicDetail/Index')
        },{
            path:'/mv',
            name:'mv',
            component:Mv
        },{
            path:'/MvDetail',
            name:"MvDetail",
            component:()=>import('@/views/MvDetail/Index')
        },{
            path:'/all',
            name:'all',
            component:()=>import('@/views/All/Index')
        },{
            path:'/cart',
            name:'cart',
            component:()=>import('@/views/Cart/Index')
        },{
            path:'/carousel',
            name:'carousel',
            component:()=>import('@/views/Carousel/Index')
        }
    ]
})