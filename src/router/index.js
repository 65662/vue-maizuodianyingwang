import Vue from 'vue'
import VueRouter from 'vue-router'

import Films from '@/views/Films.vue'
import Cinemas from '@/views/Cinemas.vue'
import Centers from '@/views/Centers.vue'
import Nowplaying from '@/views/films/Nowplaying'
import Commingsoon from '@/views/films/Commingsoon'
import Detail from '@/views/Details.vue'
import City from '@/views/City.vue'

import Search from '@/views/Search.vue'
import { children } from 'dom7'
Vue.use(VueRouter)

const routes = [
  {

    path: '/films',

    component: Films,
    children: [

      {
        path: '/films/nowplaying',

        component: Nowplaying
      },
      {
        path: '/films/commingsoon',

        component: Commingsoon
      },
      {
        path: '/films',
        redirect: '/films/nowplaying'
      }

    ]
  },
  {
    path: '/cinemas',

    component: Cinemas

  },
  {
    path: '/cinemas/search',

    component: Search
  },
  {
    path: '/city',

    component: City
  },

  {
    path: '/center',

    component: Centers
  },
  {
    path: '*',
    redirect: '/films'
  },
  {
    name: 'lqDetail',
    path: '/details/:id',

    component: Detail
  }

]

const router = new VueRouter({

  routes
})

export default router
