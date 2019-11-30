import axios from 'axios'
import store from '../store'
import logger from '../utils/logger'

const http = axios.create({
  baseURL: `${process.env.platformUrl}/api`,
  timeout: 2000,
  headers: {
    'Content-Type': 'application/json'
  }
})

http.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export default {
  setAccessToken (token = store.getters.accessToken) {
    http.defaults.headers.common['Authorization'] = `Bearer ${token}`
  },
  performGET ({path}) {
    return http.get(path)
      .then(
        (response) => {
          if (response.status < 400) {
            return response.data
          }

          throw Error(`Response status ${response.status} \n`)
        },
        logger.error
      )
  }
}
