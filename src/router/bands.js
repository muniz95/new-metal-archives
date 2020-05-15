import BandsByAlphabetical from '@/views/Bands/ByAlphabetical.vue'
import BandsByCountry from '@/views/Bands/ByCountry.vue'
import BandsByGenre from '@/views/Bands/ByGenre.vue'
import BandDetails from '@/views/Bands/Details.vue'
import BandForm from '@/views/Bands/Form.vue'

export default [
  {
    path: '/bands/alphabetical',
    name: 'BandsByAlphabetical',
    component: BandsByAlphabetical,
    meta: {
      requiresAuth: true,
      isAdmin: true
    }
  },
  {
    path: '/bands/country',
    name: 'BandsByCountry',
    component: BandsByCountry,
    meta: {
      requiresAuth: true,
      isAdmin: true
    }
  },
  {
    path: '/bands/genre',
    name: 'BandsByGenre',
    component: BandsByGenre,
    meta: {
      requiresAuth: true,
      isAdmin: true
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
    path: '/bands/:id',
    name: 'BandDetails',
    component: BandDetails,
    meta: {
      requiresAuth: true,
      isAdmin: true
    }
  }
]
