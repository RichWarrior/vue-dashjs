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
    },
    {
      name:'/Login',
      path:'/Login',
      component:()=>import('@/views/Pages/Login') 
    },
    {
      name:'/Register',
      path:'/Register',
      component:()=>import('@/views/Pages/Register')
    },
    {
      name:'/RecoverPassword',
      path:'/RecoverPassword',
      component:()=>import('@/views/Pages/RecoverPassword')
    },
    {
      name:'/Lock',
      path:'/Lock',
      component:()=>import('@/views/Pages/Lock')
    },    
    {
      name:'/500',
      path:'/500',
      component:()=>import('@/views/Pages/500')
    },
    {
      name:'/BugTracker',
      path:'/BugTracker',
      component:()=>import('@/views/Extras/BugTracker')
    },
    {
      name:'/*',
      path:'/*',
      component:()=>import('@/views/Pages/404')
    },
  ]
})
