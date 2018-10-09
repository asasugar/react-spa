const isProd=(process.env.NODE_ENV=='production')

export default {
    ajaxPath: !isProd ? '' : 'http://xxx.xxx.xxx',//服务器地址
}
