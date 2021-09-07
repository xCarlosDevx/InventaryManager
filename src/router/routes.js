
const routes = [
  {
    path: '/',
    component: () => import('layouts/Clayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/productos', component: () => import('src/pages/productos.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
