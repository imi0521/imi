import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Layout from '../views/Layout.vue'
import Mine from '../views/Mine.vue'
// import Search from '../views/Search.vue'
import Topic from '../views/Topic.vue'
// sousuo
import Sousuo from '../views/Home/Sousuo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'Layout',
    component:Layout,
    children:[
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path:'/mine',
        name:'Mine',
        component: Mine
      },
      // {
      //   path:'/search',
      //   name:'Search',
      //   component: Search
      // },
      {
        path:'/sousuo',
        name:'Sousuo',
        component: Sousuo
      },
     
      {
        path:'/topic',
        name:'Topic',
        component: Topic
      }
    ]
  },
  {
    path:'/details/:id',
    name:'Details',
    component:()=>import('../views/Home/MusicDetails.vue'),
    props:true
  },
  {
    path:'/player/:id/:name/:image',
    name:'Player',
    component:()=>import('../views/Home/Player.vue'),
    props:true
  },

  
]

const router = new VueRouter({
  linkActiveClass:'active',
  routes
})

export default router
