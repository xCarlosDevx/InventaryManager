
const routes = [
  {
    path: '/',
    component: () => import('layouts/Clayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/Productos', component: () => import('pages/Productos.vue') },
      { path: '/Dashboard', component: () => import('pages/Dashboard.vue') }
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
