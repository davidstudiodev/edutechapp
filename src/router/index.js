import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InscriptionView from '@/views/InscriptionView.vue'
import LoginView from '@/views/LoginView.vue'
import AdminView from '@/views/AdminView.vue'
import RegisterView from '@/views/RegisterView.vue'
import CoursesView from '@/views/CoursesView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/courses',
    name: 'courses',
    component: CoursesView
  },
  {
    path: '/inscription',
    name: 'inscription',
    component: InscriptionView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView
  },
  {
    path: '/register',
    name: 'resgister',
    component: RegisterView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
