import Service from 'aqa-fetch'

const service = new Service({
  baseUrl: 'http://mock.be.mi.com/mock/1066/',
  timeout: 3000,
  withDuration: true,
  debug: true,
  retry: 5,
  retryCondition: res => {
    const { code } = res
    if(code === 401){
      return true
    }
    return false
  }
})

service.requestHook(config => {
  config.header.test = '1'
  config.header.name = 'arley~~~~~~~~'
  return config
})

service.requestHook(config => {
  config.header.test += '2'
  return config
})

service.requestHook(config => {
  config.header.test += '3'
  return config
})
 
service.responseHook(response => {
  const { code, data, duration, config, headers } = response
  return response
})

export default config => {
  return service.request(config)
}
