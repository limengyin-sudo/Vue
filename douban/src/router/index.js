import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: ()=>import("../views/Home/Index")
  },
  {
    path: '/about',
    name: 'about',
    component: ()=>import("../views/About/Index"),
    children: [
      {
        path: 'read',
        component: ()=>import("../views/Read/Index")
      }, {
        path: 'movie',
        component: ()=>import("../views/Movie/Index")
      }, {
        path: 'music',
        component: ()=>import("../views/Music/Index")
      },{
        path: 'my',
        component: ()=>import("../views/My/Index")
      }
    ],
    redirect: "/about/read"
  },
  {
    path:'/listDetail',
    name:'listDetail',
    component:()=>import("../views/ListDetail/Index")
  },
  {
    path:'/movieMore',
    name:"movieMore",
    component:()=>import("../views/MovieMore/Index")
  },
  {
    path:'/movieDetail',
    name:'movieDetail',
    component:()=>import("../views/MovieDetail/Index")
  },
  {
    path:'/musicMore',
    name:"musicMore",
    component:()=>import("../views/MusicMore/Index")
  },
  {
    path:"/musicList",
    name:"musicList",
    component:()=>import("../views/MusicList/Index")
  },
  {
    path:"/musicPlay",
    name:"musicPlay",
    component:()=>import("../views/MusicPlay/Index")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
