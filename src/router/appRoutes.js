import FdPageStub from '../components/FdPageStub'
import FdRides from '../components/rides/FdRides'

export const defaultPath = '/rides'
export const logOutPath = '/login'
export const logInPath = '/login'
export const appRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'view-dashboard',
    components: {
      content: FdPageStub
    },
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/drivers',
    name: 'Drivers',
    icon: 'steering',
    components: {
      content: FdPageStub
    },
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/riders',
    name: 'Riders',
    icon: 'van-passenger',
    components: {
      content: FdPageStub
    },
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/rides',
    name: 'Rides',
    icon: 'routes',
    components: {
      content: FdRides
    },
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/disputes',
    name: 'Disputes',
    icon: 'message',
    components: {
      content: FdPageStub
    },
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/logs',
    name: 'Logs',
    icon: 'alert',
    components: {
      content: FdPageStub
    },
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/reports',
    name: 'Reports',
    icon: 'file-chart',
    components: {
      content: FdPageStub
    },
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/state',
    name: 'State',
    icon: 'help',
    components: {
      content: FdPageStub
    },
    meta: {
      requiresAuth: true
    }
  }
]
