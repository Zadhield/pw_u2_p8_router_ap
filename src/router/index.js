import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EstudianteView from '../views/EstudianteView.vue'
import EstudianteTablaView from '../views/EstudianteTablaView.vue'
import FormularioView from '../views/FormularioView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/estudiante/:cedula',
    name: 'estudianteView',
    component: EstudianteView
  },
  {
    path: '/estudianteTabla',
    name: 'estudianteTablaView',
    component: EstudianteTablaView
  },
  {
    path: '/formulario',
    name: 'formularioView',
    component: FormularioView
  },

  {
    path: '/cliente',
    name: 'clienteView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "cliente" */ '../views/ClienteView.vue')
  },

  {
    path: '/pregunta',
    name: 'preguntaView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "pregunta" */ '../views/PreguntaView.vue')
  },
  {
    path: '/contador/numeros',
    name: 'contadorView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "contadorView" */ '../views/ContadorView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
