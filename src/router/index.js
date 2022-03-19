import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TabelaEscola from '../views/TabelaEscola.vue'
import EscolaView from '../views/EscolaView.vue'
import EscolaUm from '../views/EscolaUm.vue'
import EscolaDois from '../views/EscolaDois.vue'
import EscolaTres from '../views/EscolaTres.vue'
import EscolaQuatro from '../views/EscolaQuatro.vue'
import EscolaCinco from '../views/EscolaCinco.vue'
import EscolaSeis from '../views/EscolaSeis.vue'
import EscolaSete from '../views/EscolaSete.vue'
import EscolaOito from '../views/EscolaOito.vue'
import EscolaNove from '../views/EscolaNove.vue'
import EscolaDez from '../views/EscolaDez.vue'

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
    path: '/mudanca-do-garcia',
    name: 'Mudança do Garcia',
    component: EscolaView
  },
  {
    path: '/ile-aiye',
    name: 'Ilê Aiyê',
    component: EscolaUm
  },
  {
    path: '/filhos-de-ghandy',
    name: 'Filhos de Gandhy',
    component: EscolaDois
  },
  {
    path: '/bloco-do-minhocao',
    name: 'Bloco do Minhocão',
    component: EscolaTres
  },
  {
    path: '/galo-da-madrugada',
    name: 'Galo da Madrugada',
    component: EscolaQuatro
  },
  {
    path: '/homem-da-meia-noite',
    name: 'Homem da Meia-Noite',
    component: EscolaCinco
  },
  {
    path: '/Eu-acho-e-pouco',
    name: 'Eu Acho é Pouco',
    component: EscolaSeis
  },
  {
    path: '/cordao-bola-preta',
    name: 'Cordão Bola Preta',
    component: EscolaSete
  },
  {
    path: '/banda-de-ipanema',
    name: 'Banda de Ipanema',
    component: EscolaOito
  },
  {
    path: '/suvaco-de-cristo',
    name: 'Suvaco do Cristo',
    component: EscolaNove
  },
  {
    path: '/sargento-pimenta',
    name: 'Sargento Pimenta',
    component: EscolaDez
  },
]

const router = new VueRouter({
  routes
})

export default router
