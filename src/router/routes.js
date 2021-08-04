const routes = [
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
