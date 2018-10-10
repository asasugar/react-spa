import React from 'react'
import PropTypes from 'prop-types'
import style from './index.scss'

const Hello = ({ msg }) => (
  <div className={style.hello}>
    <h2>{msg}</h2>
    <p className={style.doc}>
      <i>Redux'saasd</i>{' '}
      <a href="http://redux.js.org/" target="_blank">
        doc
      </a>
      ( or{' '}
      <a href="http://cn.redux.js.org/" target="_blank">
        zh-doc
      </a>{' '}
      )
    </p>
    <p className={style.doc}>
      <i>react-router's</i>{' '}
      <a
        href="https://reacttraining.com/react-router/web/example/basic"
        target="_blank"
      >
        doc
      </a>
      ( or{' '}
      <a href="https://reacttraining.cn/web/guides/quick-start" target="_blank">
        zh-doc
      </a>{' '}
      )
    </p>
  </div>
)

Hello.prototype.propTypes = {
  msg: PropTypes.string
}

export default Hello
