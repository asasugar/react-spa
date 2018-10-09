import React from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'
import routes from 'routes'

const App = () => (
  <div className='App'>
    <HashRouter>
      {renderRoutes(routes)}
    </HashRouter>
    {/* <BrowserRouter basename="/aa/bb/">BrowserRouter路由
    </BrowserRouter> */}
  </div>
)
export default App
