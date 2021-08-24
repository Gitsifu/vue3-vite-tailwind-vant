import {RouteRecordRaw} from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/page/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/page/About.vue')
  }
]

export default routes
