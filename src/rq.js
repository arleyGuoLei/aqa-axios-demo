import Service from 'aqa-request'

const service = new Service({
  baseUrl: 'http://mock.be.mi.com/mock/1066/',
  timeout: 8000,
  withDuration: true,
  debug: true,
  retryCondition: res => {

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

export default config => {
  return service.request(config)
}
