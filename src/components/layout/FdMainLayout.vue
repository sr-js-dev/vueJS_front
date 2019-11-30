<template>
    <v-app>
        <fd-navigation></fd-navigation>
        <fd-toolbar></fd-toolbar>
        <main>
            <v-content>
                <v-container fluid>
                    <router-view name="content"></router-view>
                </v-container>
            </v-content>
        </main>
        <fd-footer></fd-footer>
    </v-app>
</template>

<script>
  import FdNavigation from './FdNavigation'
  import FdToolbar from './FdToolbar'
  import FdFooter from './FdFooter'

  export default {
    name: 'fd-main-layout',
    components: {
      FdNavigation,
      FdToolbar,
      FdFooter
    },
    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [{
          icon: 'bubble_chart',
          title: 'Inspire'
        }]
      }
    }
  }
</script>
