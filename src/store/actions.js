// import { default as logger } from '../utils/logger'
import * as types from './mutation-types'
import { logOutPath } from '../router/appRoutes'
import router from '../router'

// Session actions
export const setAccessToken = ({commit}, accessToken) => {
  commit(types.SESSION_SET_ACCESS_TOKEN, accessToken)
}

export const setUser = ({commit}, user) => {
  commit(types.SESSION_SET_USER, user)
}

export const logout = ({dispatch}) => {
  dispatch('setAccessToken', void 0)
  dispatch('setUser', {
    id: void 0,
    name: void 0
  })
  router.push(logOutPath)
}

// View actions
export const toggleDrawer = ({commit}) => {
  commit(types.VIEW_TOGGLE_DRAWER)
}
