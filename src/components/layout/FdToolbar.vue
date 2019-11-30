<template>
    <v-toolbar clipped app>
        <v-toolbar-side-icon @click.stop="toggleDrawer()"></v-toolbar-side-icon>
        <v-toolbar-title>Facedrive Admin Tool</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-sm-and-down">
            <v-menu transition="slide-y-transition" bottom open-on-hover>
                <v-btn flat slot="activator" v-text="`Hello, ${session.user.name || 'User'}`"></v-btn>
                <v-list>
                    <v-list-tile @click.stop="logout()">
                        <v-list-tile-action>
                            <v-icon>mdi-logout</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Logout</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-menu>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'fd-navigation',
    computed: {
      ...mapState([
        'session'
      ])
    },
    methods: {
      ...mapActions([
        'toggleDrawer',
        'logout'
      ])
    }
  }
</script>
