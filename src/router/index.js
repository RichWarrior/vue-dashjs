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
    },
    {
      name:'/Spinner',
      path:'/Spinner',
      component:() => import('@/views/Elements/Spinner')
    },
    {
      name:'/Tree',
      path:'/Tree',
      component:()=>import('@/views/Elements/TreeView')
    },
    {
      name:'/Cards',
      path:'/Cards',
      component:()=>import('@/views/Elements/Cards')
    },
    {
      name:'/Forms',
      path:'/Forms',
      component:()=>import('@/views/Forms/Forms')
    },
    {
      name:'/WizardForms',
      path:'/WizardForms',
      component:()=>import('@/views/Forms/WizardForms')
    },
    {
      name:'/Charts',
      path:'/Charts',
      component:()=>import('@/views/Charts/index')
    },
    {
      name:'/Table',
      path:'/Table',
      component:()=>import('@/views/Table/index')
    }
  ]
})
