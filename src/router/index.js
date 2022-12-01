import Vue from 'vue'
import VueRouter from 'vue-router'

import LandingLayout from '@/layouts/LandingLayout.vue'
import ExhibitionLayout from '@/layouts/ExhibitionLayout.vue'
import LandingView from '@/views/LandingView.vue'
import ExhibitionView from '@/views/ExhibitionView.vue'
import FaqView from '@/views/FaqView.vue'
import RegistrationView from '@/views/RegistrationView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'landing',
    component: LandingView,
    meta: { layout: LandingLayout }
  },
  {
    path: '/exhibition',
    name: 'exhibition',
    component: ExhibitionView,
    meta: { layout: ExhibitionLayout }
  },
  {
    path: '/exhibition/store/:id?',
    name: 'store',
    component: ExhibitionView,
    props: { exhibContent: 'detail-store' },
    meta: { layout: ExhibitionLayout }
  },
  {
    path: '/exhibition/product/:id?',
    name: 'product',
    component: ExhibitionView,
    props: { exhibContent: 'detail-product' },
    meta: { layout: ExhibitionLayout }
  },
  {
    path: '/faq/:id?',
    name: 'faq',
    component: FaqView,
    meta: { layout: LandingLayout }
  },
  // {
  //   path: '/faq/question/:id?',
  //   name: 'faq',
  //   component: FaqView,
  //   props: { content: 'question-detail' },
  //   meta: { layout: LandingLayout }
  // },
  {
    path: '/registration',
    name: 'registration',
    component: RegistrationView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash }
    } else {
      return savedPosition
    }
    // return {
    //   selector: to.hash,
    // }
  }
})

export default router