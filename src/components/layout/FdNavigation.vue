<template>
    <v-navigation-drawer
            persistent
            clipped
            v-model="view.drawer"
            enable-resize-watcher
            app>
        <v-toolbar class="transparent">
            <router-link :to="{ path: '/' }" class="text-md-center">
                <img width="75%" src="../../assets/icons/facedrive-logo.svg">
            </router-link>
        </v-toolbar>

        <v-list>
            <v-list-tile
                    :exact="true"
                    :ripple="true"
                    v-for="item in navigationItems"
                    :key="item.path"
                    :to="{ path: item.path }"
            >
                <v-list-tile-action>
                    <v-icon v-text="`mdi-${item.icon}`"></v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title v-text="item.name"></v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
  import { mapState } from 'vuex'
  import { appRoutes } from '../../router/appRoutes'

  export default {
    name: 'fd-navigation',
    computed: {
      ...mapState([
        'route',
        'view'
      ]),
      navigationItems () {
        return appRoutes
      }
    },
    methods: {
      isActive (item) {
        return item.path === this.route.path
      }
    }
  }
</script>
