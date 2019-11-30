// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import store from './store'
import router from './router'
import { beforeEachGuard } from './router/guards'
import { sync } from 'vuex-router-sync'
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  VCard,
  VStepper,
  VDivider,
  VMenu,
  VDataTable,
  VTooltip,
  transitions
} from 'vuetify'
import './stylus/main.styl'
import 'mdi/css/materialdesignicons.min.css'

import App from './App'
import { default as logger, DEBUG } from './utils/logger'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VCard,
    VStepper,
    VDivider,
    VMenu,
    VDataTable,
    VTooltip,
    transitions
  }
})

Vue.config.productionTip = false
logger.level = DEBUG

if (process.env.NODE_ENV === 'development') {
  Vue.config.debug = true
}

const unsync = sync(store, router)
beforeEachGuard(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: {App},
  beforeDestroy () {
    unsync()
  }
})
