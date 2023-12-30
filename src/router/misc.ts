import UserRankings from '@/views/UserRankings.vue'
import NewsArchive from '@/views/NewsArchive.vue'
import Reviews from '@/views/Reviews.vue'
import RIP from '@/views/RIP.vue'
import Reports from '@/views/Reports.vue'
import Help from '@/views/Help.vue'
import Rules from '@/views/RulesView.vue'
import FAQ from '@/views/FAQ.vue'

export default [
  {
    path: '/user/rankings',
    name: 'UserRankings',
    component: UserRankings,
    meta: {
      requiresAuth: true,
      isAdmin: true
    }
  },
  {
    path: '/news/archive',
    name: 'NewsArchive',
    component: NewsArchive,
    meta: {
      requiresAuth: true,
      isAdmin: true
    }
  },
  {
    path: '/reviews',
    name: 'Reviews',
    component: Reviews,
    meta: {
      requiresAuth: true,
      isAdmin: true
    }
  },
  {
    path: '/rip',
    name: 'RIP',
    component: RIP,
    meta: {
      requiresAuth: true,
      isAdmin: true
    }
  },
  {
    path: '/reports',
    name: 'Reports',
    component: Reports,
    meta: {
      requiresAuth: true,
      isAdmin: true
    }
  },
  {
    path: '/help',
    name: 'Help',
    component: Help,
    meta: {
      requiresAuth: true,
      isAdmin: true
    }
  },
  {
    path: '/rules',
    name: 'Rules',
    component: Rules,
    meta: {
      requiresAuth: true,
      isAdmin: true
    }
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: FAQ,
    meta: {
      requiresAuth: true,
      isAdmin: true
    }
  }
]
