import Vue from 'vue'
import Router from 'vue-router'
import About from '../components/About.vue'
import Community from '../components/Community.vue'
import Home from '../components/Home.vue'
import Learn from '../components/Learn.vue'
import Student from '../components/Student.vue'


import Academic from '../components/community/Academic'
import Download from '../components/community/Download'
import Personal from '../components/community/Personal'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/community',
      name: 'community',
      component: Community,
      children: [
        {
          path: '/community/academic',
          name: 'academic',
          component: Academic
        },
        {
          path: '/community/download',
          name: 'download',
          component: Download
        },
        {
          path: '/community/personal',
          name: 'personal',
          component: Personal
        }
      ]
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/learn',
      name: 'learn',
      component: Learn
    },
    {
      path: '/student',
      name: 'student',
      component: Student
    },
  ]
})
