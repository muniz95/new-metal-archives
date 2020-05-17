import ReleaseDetails from '@/views/Releases/Details.vue'

export default [
  {
    path: '/releases/:id',
    name: 'ReleaseDetails',
    component: ReleaseDetails,
    meta: {
      requiresAuth: true,
      isAdmin: true
    }
  }
]
