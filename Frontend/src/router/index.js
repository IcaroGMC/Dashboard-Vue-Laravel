import { createRouter, createWebHistory } from 'vue-router'
import LoginComponent from '../components/pages/login/LoginComponent'
import HomeComponent from '../components/pages/home/HomeComponent'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginComponent
  },
  {
    path: '/home',
    name: 'home',
    component: HomeComponent
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
