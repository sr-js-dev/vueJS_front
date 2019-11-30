import * as types from './mutation-types'

export default {
  // App mutations
  [types.SESSION_SET_ACCESS_TOKEN]: setAccessToken,
  [types.SESSION_SET_USER]: setUser,

  // App view mutations
  [types.VIEW_TOGGLE_DRAWER]: toggleDrawer
}

// App mutations
function setAccessToken (state, accessToken) {
  state.session.accessToken = accessToken
}

function setUser (state, user) {
  state.session.user = user
}

// App view mutations
function toggleDrawer (state) {
  state.view.drawer = !state.view.drawer
}
