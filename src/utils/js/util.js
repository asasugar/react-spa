import axios from 'axios'
import urlConfig from './urlConfig'
import qs from 'qs'

const util = {}
axios.defaults.withCredentials = true
util.axios = (
  { url = '/', data = {}, type = 'get' } = {},
  otherConfig = {}
) => {
  var isFormData = data instanceof FormData
  url = /http/.test(url) ? url : urlConfig.ajaxPath + url
  var config = {
    method: type,
    url,
    [type == 'get' ? 'params' : 'data']:
      type == 'get' ? data : isFormData ? data : qs.stringify(data),
    headers: {
      'Content-Type': isFormData
        ? ' multipart/form-data'
        : 'application/x-www-form-urlencoded'
    },
    ...otherConfig
  }

  Object.assign(config, otherConfig)
  return axios(config)
}
//通用正则表达式
util.regexp = {
  email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  url: /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i,
  number: /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/,
  isZipCode: /^[0-9]{6}$/,
  phone: /^((0\d{2,3}-\d{7,8})|(0\d{2,3}-\d{7,8}#\d{3,7})|(\d{7,8})|(\d{7,8}#\d{3,7})|((13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}))$/,
  idCard: /^\d{15}(\d{2}[A-Za-z0-9])?$/
}

export default util
