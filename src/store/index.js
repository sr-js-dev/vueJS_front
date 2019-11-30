import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const state = {
  session: {
    accessToken: void 0,
    user: {
      id: void 0,
      name: void 0
    }
  },
  view: {
    drawer: true
  }
}

const persistedConfig = {
  key: 'facedrive',
  paths: ['session', 'view']
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  plugins: process.env.NODE_ENV !== 'production'
    ? [createLogger(), createPersistedState(persistedConfig)]
    : [createPersistedState(persistedConfig)]
})

export default store
