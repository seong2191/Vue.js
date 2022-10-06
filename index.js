import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/loginMsg',
    name: 'LoginMsg',
    component: () =>
      import(/* webpackChunkName: "user" */ '../views/user/LoginMsg/LoginMsg.vue')
  },
  {
    path: '/loginForm',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: "user" */ '../views/user/LoginPage.vue')
  },
  {
    path: '/joinForm',
    name: 'Join',
    component: () =>
      import(/* webpackChunkName: "user" */ '../views/user/JoinPage.vue')
  },
  {
    path: '/LoginJoin',
    name: 'LoginJoin',
    component: () =>
      import(/* webpackChunkName: "user" */ '../views/user/LoginJoin.vue')
  },
  {
    path: '/joinDone',
    name: 'JoinDone',
    component: () =>
      import(/* webpackChunkName: "user" */ '../views/user/JoinDone.vue')
  },
  {
    path: '/portChat',
    name: 'PortChat',
    component: () =>
      import(/* webpackChunkName: "port" */ '../views/port/PortChat.vue')
  },
  {
    path: '/test',
    name: 'StoreTest',
    component: () =>
      import(/* webpackChunkName: "test" */ '../views/test/StoreTest.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
