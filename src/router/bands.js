import BandsByAlphabetical from '@/views/Bands/ByAlphabetical.vue'
import BandsByCountry from '@/views/Bands/ByCountry.vue'
import BandsByGenre from '@/views/Bands/ByGenre.vue'
import BandDetails from '@/views/Bands/Details.vue'
import BandsPendingApproval from '@/views/Bands/PendingApproval.vue'
import BandForm from '@/views/Bands/Form.vue'

export default [
  {
    path: '/bands/alphabetical',
    name: 'BandsByAlphabetical',
    component: BandsByAlphabetical,
    meta: {
      requiresAuth: false,
      isAdmin: false
    }
  },
  {
    path: '/bands/country',
    name: 'BandsByCountry',
    component: BandsByCountry,
    meta: {
      requiresAuth: false,
      isAdmin: false
    }
  },
  {
    path: '/bands/genre',
    name: 'BandsByGenre',
    component: BandsByGenre,
    meta: {
      requiresAuth: false,
      isAdmin: false
    }
  },
  {
    path: '/bands/new',
    name: 'NewBand',
    component: BandForm,
    meta: {
      requiresAuth: false,
      isAdmin: false
    }
  },
  {
    path: '/bands/queue',
    name: 'BandsPendingApproval',
    component: BandsPendingApproval,
    meta: {
      requiresAuth: false,
      isAdmin: false
    }
  },
  {
    path: '/bands/:id/edit',
    name: 'BandEdit',
    component: BandForm,
    meta: {
      requiresAuth: false,
      isAdmin: false
    }
  },
  {
    path: '/bands/:id',
    name: 'BandDetails',
    component: BandDetails,
    meta: {
      requiresAuth: false,
      isAdmin: false
    }
  }
]
