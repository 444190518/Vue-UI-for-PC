'use strict'
let target = ''
if (process.env.npm_config_argv) {
  const argv = JSON.parse(process.env.npm_config_argv)
  target = argv.original[2] ? argv.original[2].replace('--', '') : ''
}
// 缺省值
let prodEnv = {
  NODE_ENV: '"production"',
  BASE_URL: '""', // API基础地址
  LOGO_URL: '""', // logo url，默认为'"~/img/logo.png"'
  MS_PATH: '""', // MS_PATH
  PROJECT_ID:'""'
}
module.exports = prodEnv

/*module.exports = {
  NODE_ENV: '"production"'
}*/
