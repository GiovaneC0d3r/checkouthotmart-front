import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'pix',
      component: () => import('@/views/PixView.vue'),
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('@/views/FormView.vue'),
    },
    {
      path: '/yampi',
      name: 'yampi',
      component: () => import('@/views/YampiView.vue'),
    },
    {
      path: '/adoreii',
      name: 'adoreii',
      component: () => import('@/views/AdoreiiView.vue'),
    },
    {
      path: '/detalhesdopedido',
      name: 'detalhesdopedido',
      component: () => import('@/views/DetalhesDoPedidoView.vue'),
    },
    {
      path: '/polihousi',
      name: 'polihousi',
      component: () => import('@/views/PolihousiView.vue'),
    },
    {
      path: '/vega',
      name: 'vega',
      component: () => import('@/views/VegaView.vue'),
    },
    {
      path: '/cartx',
      name: 'cartx',
      component: () => import('@/views/CartxView.vue'),
    },
    {
      path: '/pedido',
      name: 'pedido',
      component: () => import('@/views/PedidoView.vue'),
    }
  ]
})

export default router
