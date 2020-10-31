import Vue from 'vue'
import VueRouter from 'vue-router'
import AdminDashboard from '../views/Dashboard.vue'
import Store from '../views/Store.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: AdminDashboard,
    children: [
      {
        path: '/stores',
        name: 'stores',
        component: Store
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
