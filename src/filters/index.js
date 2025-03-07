/**
 * 将日期时间戳进行格式化
 *
 * @param {Date} time 日期
 * @param {String} cFormat 格式化
 *
 * e.g. parseTime(new Date*1)
 *   ==> 2018-01-30 18:52:39
 *
 *  parseTime(new Date*1, '{y}-{m}-{d} 星期 {a}')
 *   ==> 2018-01-30 星期二
 *
 */
export function parseTime (time, cFormat) {
  if (!time) {
    return ''
  }

  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'

  let date = null
  date = typeof time === 'object' ? time : new Date(parseInt(time))

  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return timeStr
}

/**
 * 基于环境配置信息，
 * 自动补全图片服务器地址
 * @param {Str} src 图片路径地址
 */
export function fillImagePath (src) {
  const imagePath = window.APP_CONFIG.IMAGE_PATH || process.env.IMAGE_PATH
  return imagePath
  // return process.env.IMAGE_PATH + src
}

/**
 * 基于环境配置信息，
 * 针对 99 服务器 以 ms前缀地址
 * 自动补全 ms 下载 服务器地址
 * @param {Str} src download服务地址
 */
export function fillMsServerPath (src) {
  const serverPath = window.APP_CONFIG.MS_PATH || process.env.MS_PATH
  return serverPath
  // return process.env.MS_PATH + src
}

/**
 * 基于环境配置信息，
 * 自动补全 baseServerPath
 * @see  /config/index.js
 * @param {Str} src  api地址
 */
export function fillBaseServerPath (src) {
  const serverPath = window.APP_CONFIG.BASE_URL || process.env.BASE_URL
  return serverPath
  // return process.env.BASE_URL + src
}

/**
 * 将 1,234 这种形式的 数字字符串转为 数值类型
 *
 * e.g. numberFormat('1,234') => 1234
 *
 * @param {String} numberString 数值字符串
 */
export function numberFormat (numberString) {
  numberString = '' + numberString
  numberString = numberString.replace(/,/g, '')
  return +numberString
}

/**
 * 过滤字符串中含有的html标签
 * @param {String} str 原始字符串
 *
 * 在取值时 非字符串类型 时,进行特殊处理
 * 数据为 null, '' 时 返回 ''
 */
export function filterHTMLTag (str) {
  if (typeof str === 'number' || typeof str === 'boolean' || typeof str === 'function') {
    str = '' + str
  }
  return str ? str.replace(/<[^>]+>/gm, '') : ''
}
