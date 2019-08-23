import LabelsByAlphabetical from '@/views/Labels/ByAlphabetical.vue'
import LabelsByCountry from '@/views/Labels/ByCountry.vue'

export default [
  {
    path: '/labels/alphabetical',
    name: 'LabelsByAlphabetical',
    component: LabelsByAlphabetical
  },
  {
    path: '/labels/country',
    name: 'LabelsByCountry',
    component: LabelsByCountry
  }
]
