import { common } from '../components'

export default [
  {
    path: '/',
    component: common.login,
    meta: {
      title: 'analysis'
    }
  },
  {
    path: '/dashboard/analysis',
    component: common.dashboardAnalysis,
    meta: {
      title: 'dashboard'
    }
  },
  {
    path: '/dashboard/workspace',
    component: common.dashboardWorkspace,
    meta: {
      title: 'workspace'
    }
  },
  {
    path: '/form/basic',
    component: common.formBasic,
    meta: {
      title: 'basic'
    }
  },
  {
    path: '/form/step',
    component: common.formStepIndex,
    redirect: '/form/step/info',
    meta: {
      title: 'step'
    },
    children: [
      {
        path: 'info',
        component: common.formStepInfo,
        meta: {
          title: 'info'
        }
      },
      {
        path: 'confirm',
        component: common.formStepConfirm,
        meta: {
          title: 'confirm'
        },
        beforeEnter (to, from, next) {
          from.path !== '/form/step/info' ? next('/form/step/info') : next()
        }
      },
      {
        path: 'success',
        component: common.formStepSuccess,
        meta: {
          title: 'success'
        },
        beforeEnter (to, from, next) {
          from.path !== '/form/step/confirm' ? next('/form/step/info') : next()
        }
      }
    ]
  },
  {
    path: '/form/advanced',
    component: common.formAdvanced,
    meta: {
      title: 'advanced'
    }
  }
]
