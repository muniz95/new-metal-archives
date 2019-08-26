import UserRankings from '@/views/UserRankings'
import NewsArchive from '@/views/NewsArchive'
import Reviews from '@/views/Reviews'
import RIP from '@/views/RIP'
import Reports from '@/views/Reports'
import Help from '@/views/Help'
import Rules from '@/views/Rules'
import FAQ from '@/views/FAQ'

export default [
  {
    path: '/user/rankings',
    name: 'UserRankings',
    component: UserRankings
  },
  {
    path: '/news/archive',
    name: 'NewsArchive',
    component: NewsArchive
  },
  {
    path: '/reviews',
    name: 'Reviews',
    component: Reviews
  },
  {
    path: '/rip',
    name: 'RIP',
    component: RIP
  },
  {
    path: '/reports',
    name: 'Reports',
    component: Reports
  },
  {
    path: '/help',
    name: 'Help',
    component: Help
  },
  {
    path: '/rules',
    name: 'Rules',
    component: Rules
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: FAQ
  }
]
