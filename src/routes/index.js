import React from 'react'
import Imported from 'react-imported-component'
import { renderRoutes } from 'react-router-config'

const RootRoute = ({ route }) => (//根路由
  <div>
    {renderRoutes(route.routes)}
  </div>
)

const routes = [
  { component: RootRoute,
    routes: [
      { path: '/',
        exact: true,
        component: Imported(() =>import ('views/Home/index'))
      },
      { path: '/page1',
        component: Imported(() =>import ('views/page-1/index')),
      },
      { path: '/page2',
        component: Imported(() =>import ('views/page-2/index')),
      }
    ]
  }
]
export default routes