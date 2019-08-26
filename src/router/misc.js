import UserRankings from '@/views/UserRankings'
import NewsArchive from '@/views/NewsArchive'

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
  }
]
