import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue' 
import About from '../views/About.vue' 
import Blog from '../views/Blog.vue' 
import Contact from '../views/Contact.vue' 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '/Blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  },
   
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
