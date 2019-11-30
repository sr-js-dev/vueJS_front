<template></template>
<script>
  import { getParameterByName } from '../utils/url'
  import { mapActions } from 'vuex'
  import { defaultPath } from '../router/appRoutes'

  export default {
    name: 'fd-social-callback',
    methods: {
      ...mapActions([
        'setAccessToken',
        'setUser'
      ])
    },
    created () {
      const token = getParameterByName('accessToken', window.location.href)
      const name = getParameterByName('firstName', window.location.href)
      const id = getParameterByName('userId', window.location.href)

      this.setAccessToken(token)
      this.setUser({
        id,
        name
      })

      this.$router.push(defaultPath)
    }
  }
</script>
