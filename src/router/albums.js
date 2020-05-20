import AlbumForm from '@/views/Albums/Form.vue'
import AlbumDetails from '@/views/Albums/Details.vue'

export default [
  {
    path: '/albums/:id/edit',
    name: 'AlbumEdit',
    component: AlbumForm,
    meta: {
      requiresAuth: true,
      isAdmin: true
    }
  },
  {
    path: '/albums/:id',
    name: 'AlbumDetails',
    component: AlbumDetails,
    meta: {
      requiresAuth: true,
      isAdmin: true
    }
  }
]
