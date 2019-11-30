<template>
    <router-view></router-view>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'app',
    computed: {
      ...mapState([
        'session'
      ])
    }
  }

</script>
