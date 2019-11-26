import BandsByAlphabetical from '@/views/Bands/ByAlphabetical.vue'
import BandsByCountry from '@/views/Bands/ByCountry.vue'
import BandsByGenre from '@/views/Bands/ByGenre.vue'
import BandDetails from '@/views/Bands/Details.vue'

export default [
  {
    path: '/bands/alphabetical',
    name: 'BandsByAlphabetical',
    component: BandsByAlphabetical
  },
  {
    path: '/bands/country',
    name: 'BandsByCountry',
    component: BandsByCountry
  },
  {
    path: '/bands/genre',
    name: 'BandsByGenre',
    component: BandsByGenre
  },
  {
    path: '/bands/:id',
    name: 'BandDetails',
    component: BandDetails
  }
]
