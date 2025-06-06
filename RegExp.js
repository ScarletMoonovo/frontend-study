function getqueryParams(url, key) {
  const reg = new RegExp('[?&]' + key + '=([^&#]*)', 'i')
  const result = reg.exec(url)
  return result ? decodeURIComponent(result[1]) : null
}

console.log(getqueryParams('https://www.baidu.com?name=zhangsan&age=18', 'name'))

