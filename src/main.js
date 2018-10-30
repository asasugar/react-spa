import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'mobx-react'
import store from './store'

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById('root')
  )
}

render(App)

// 局部刷新
if (module.hot) {
  module.hot.accept('./App', () => render(App))
}
