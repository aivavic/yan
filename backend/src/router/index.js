import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

let router = new Router({
  saveScrollPosition: true,
  history: true
})

router.map({
  '/user/login': {
    component: Login
  },
  '/': {
    component: Layout,
    subRoutes: {
      '/index': {
        component: Index
      },
      '/hello': {
        component: Hello
      }
    }
  },
  '*': {
    component: NotFound
  }
})

export default router
