import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      name:'/',
      component : () => import ('@/views/Dashboard/index')
    },
    {
      path:'/Buttons',
      name:'/Buttons',
      component : () => import('@/views/Elements/Button')
    },
    {
      path:'/Notification',
      name:'/Notification',
      component:()=>import('@/views/Elements/Notification')
    },
    {
      name:'/Carousel',
      path:'/Carousel',
      component:()=>import('@/views/Elements/Carousel')
    }
  ]
})
