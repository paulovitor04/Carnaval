import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TabelaEscola from '../views/TabelaEscola.vue'
import EscolaView from '../views/EscolaView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/escolas-de-samba',
    name: 'Escolas de Samba',
    component: TabelaEscola
  },
  {
    path: '/escola-de-samba',
    name: 'samba!!!',
    component: EscolaView
  }
]

const router = new VueRouter({
  routes
})

export default router
