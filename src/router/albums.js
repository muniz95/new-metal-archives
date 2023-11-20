import AlbumForm from '@/views/Albums/Form.vue'
import AlbumDetails from '@/views/Albums/AlbumDetails.vue'

export default [
  {
    path: '/albums/:id/edit',
    name: 'AlbumEdit',
    component: AlbumForm,
    meta: {
      requiresAuth: false,
      isAdmin: false
    }
  },
  {
    path: '/albums/new',
    name: 'NewAlbum',
    component: AlbumForm,
    meta: {
      requiresAuth: false,
      isAdmin: false
    }
  },
  {
    path: '/albums/:id',
    name: 'AlbumDetails',
    component: AlbumDetails,
    meta: {
      requiresAuth: false,
      isAdmin: false
    }
  }
]
