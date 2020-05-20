import ReleaseForm from '@/views/Releases/Form.vue'
import ReleaseDetails from '@/views/Releases/Details.vue'

export default [
  {
    path: '/releases/:id/edit',
    name: 'ReleaseEdit',
    component: ReleaseForm,
    meta: {
      requiresAuth: true,
      isAdmin: true
    }
  },
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
