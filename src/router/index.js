import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import zhineng from '@/components/zhineng'
import gaoxiao from '@/components/gaoxiao'
import xiangqing from '@/components/xiangqing'
import login from '@/components/login'
import play from '@/components/play'

Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/zhineng',
      name: 'zhineng',
      component: zhineng
    },
    {
      path: '/xiangqing',
      name: 'xiangqing',
      component: xiangqing
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/play',
      name: 'play',
      component: play
    }
  ]
})
