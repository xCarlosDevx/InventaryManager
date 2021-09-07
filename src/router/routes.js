
const routes = [
  {
    path: '/',
    component: () => import('layouts/Clayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
<<<<<<< HEAD
      { path: '/productos', component: () => import('src/pages/productos.vue') }
=======
      { path: '/Productos', component: () => import('pages/Productos.vue') },
      { path: '/Dashboard', component: () => import('pages/Dashboard.vue') }
>>>>>>> 4ff54a13dccb3dd0b099adc44e4477b5b20251b4
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
