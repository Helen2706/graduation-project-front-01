import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BackManagement from '@/components/BackManagement'
import CollegeDemo from '@/components/college-website'

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
      component: BackManagement
    },
    {
      path:'/college-demo',
      name:'college-website',
      component:CollegeDemo
    }
  ]
})
