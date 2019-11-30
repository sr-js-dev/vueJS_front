import api from './api'

export default {
  getRides () {
    api.setAccessToken()
    return api.performGET({
      path: '/info/rides'
    })
  }
}
