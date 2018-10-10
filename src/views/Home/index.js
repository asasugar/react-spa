import React from 'react'
import style from './index.scss'
import logo from '../../assets/logo.svg'
import Hello from 'components/Hello'
class Home extends React.Component {
  state = {}
  componentDidMount() {}
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
