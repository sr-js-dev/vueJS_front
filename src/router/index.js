import Vue from 'vue'
import Router from 'vue-router'
import FdLogin from '../components/FdLogin'
import FdSocialCallback from '../components/FdSocialCallback'
import FdMainLayout from '../components/layout/FdMainLayout'
import { defaultPath, logInPath, appRoutes } from './appRoutes'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: FdMainLayout,
      redirect: defaultPath,
      children: appRoutes
    },
    {
      path: logInPath,
      name: 'Login',
      component: FdLogin
    },
    {
      path: '/social-callback',
      name: 'SocialCallback',
      component: FdSocialCallback
    }
  ]
})

export default router
