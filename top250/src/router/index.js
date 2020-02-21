import Vue from 'vue'
import VueRouter from 'vue-router'
import DRouting from '@/views/DRouting/Index'
import Detail from '@/views/Detail/Index'
import Films from '@/views/Films/Index'
import NowPlaying from '@/views/NowPlaying/Index'
import ComingSoon from '@/views/ComingSoon/Index'
import NowSoon from '@/views/NowSoon/Index'
import City from '@/views/City/Index'
Vue.use(VueRouter)

const routes = [
  {
    path: '/DRouting',
    name: 'DRouting',
    component:DRouting,
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component:Detail
  },
  {
    path:'/',
    redirect:'/DRouting'
  },
  {
    path: '/films',
    name: 'films',
    component:Films,
    children: [
      {
        path: 'nowPlaying',
        component: NowPlaying
      }, {
        path: 'comingSoon',
        component: ComingSoon
      }
    ],
    redirect: "/films/nowPlaying"
  },
  {
    path:"/nowsoon",
    name:"nowsoon",
    component:NowSoon
  },
  {
    path:"/city",
    name:"city",
    component:City
  }
]
const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})
export default router