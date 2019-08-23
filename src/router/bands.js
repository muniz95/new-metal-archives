import BandsByAlphabetical from '@/views/Bands/ByAlphabetical.vue'
import BandsByCountry from '@/views/Bands/ByCountry.vue'
import BandsByGenre from '@/views/Bands/ByGenre.vue'

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
  }
]
