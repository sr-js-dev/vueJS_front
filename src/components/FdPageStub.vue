<template>
    <h3 v-text="route.name"></h3>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'fd-page-stub',
    computed: {
      ...mapState([
        'route'
      ])
    }
  }
</script>
