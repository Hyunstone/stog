import { createRouter, createWebHistory } from 'vue-router'
import BlogPost from '@/components/BlogPost.vue'
import BlogHome from '@/components/BlogHome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BlogHome,
    },
    {
      path: '/posts/:id',
      name: 'post',
      component: BlogPost,
      props: true,
    },
  ],
})

export default router
