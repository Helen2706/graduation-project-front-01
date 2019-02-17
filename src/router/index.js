import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BackManagement from '@/components/BackManagement'
import CollegeDemo from '@/components/college-website'
import NavbarManagement from '@/components/NavbarManagement'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/back',
      name: 'BackManagement',
      component: BackManagement,
      children:[
        {
          path:'',
          name:'NavbarManagement',
          component:NavbarManagement
        },
        {
        path:'navbar-menu',
        name:'NavbarManagement',
        component:NavbarManagement
      }]
    },
    {
      path:'/college-demo',
      name:'college-website',
      component:CollegeDemo
    }
  ]
})
