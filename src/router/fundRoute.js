const routes = [
  {
    path: '/fund',
    component: () =>
      import('@/layout/Fund'),
    children: [{
      path: '/',
      redirect: 'loan'
    },
    {
      path: 'index',
      name: 'PlanTable',
      meta: {
        requireAuth: false // 需要登录验证
      },
      component: () => import(/* webpackChunkName: 'Fund' */ '@/page/funder/Index')
    },
    {
      path: 'loan',
      name: '放款处理',
      component: () => import(/* webpackChunkName: 'Fund' */ '@/page/funder/LoanList'),
      meta: {
        requireAuth: true // 需要登录验证
      }
    },
    {
      path: 'loanreject',
      name: '拒绝放款查询',
      component: () =>
        import(/* webpackChunkName: 'Fund' */ '@/page/funder/LoanRejectList'),
      meta: {
        requireAuth: true // 需要登录验证
      }
    },
    {
      path: 'loaned',
      name: '已放款查询',
      component: () =>
        import(/* webpackChunkName: 'Fund' */ '@/page/funder/LoanedList'),
      meta: {
        requireAuth: true // 需要登录验证
      }
    },
    {
      path: 'loanfinish',
      name: '已完结查询',
      component: () =>
        import(/* webpackChunkName: 'Fund' */ '@/page/funder/LoanFinishList'),
      meta: {
        requireAuth: true // 需要登录验证
      }
    },
    {
      path: 'cstLoanFee',
      name: '客户利率维护',
      component: () =>
        import(/* webpackChunkName: 'Fund' */ '@/page/funder/LoanFeeList'),
      meta: {
        requireAuth: true // 需要登录验证
      }
    },
    {
      path: 'lolanuserinfo',
      name: '个基础信息',
      component: () =>
        import(/* webpackChunkName: 'Fund' */ '@/page/funder/UserInfo'),
      meta: {
        requireAuth: true // 需要登录验证
      }
    }
    ]
  }
]
export default routes
