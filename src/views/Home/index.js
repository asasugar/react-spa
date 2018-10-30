import React from 'react'
import { inject, observer } from 'mobx-react'
import style from './index.scss'
import logo from '../../assets/logo.svg'
import Hello from 'components/Hello'

@inject('store')
@observer
class Home extends React.Component {
  state = {
    number: this.props.store.global.number
  }
  componentDidMount() {
    this.props.store.global.add()
  }
  componentWillUnmount() {}
  render() {
    return (
      <div className={style.home}>
        <header className={style.header}>
          <img src={logo} className={style.logo} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className={style.link}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Hello />
      </div>
    )
  }
}

export default Home
