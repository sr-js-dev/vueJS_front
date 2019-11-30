<template>
    <v-app>
        <main>
            <v-container grid-list-md text-xs-center>
                <v-layout column>
                    <v-flex class="md4 offset-md4">
                        <img src="../assets/icons/facedrive-logo.svg">
                    </v-flex>
                    <v-flex class="md4 offset-md4">
                        <a :href="socialLink('google')" class="btn-social btn-google">
                            <span class="icon"></span>
                            Login / Sign up with Google
                        </a>
                    </v-flex>
                    <v-flex class="md4 offset-md4">
                        <a :href="socialLink('facebook')" class="btn-social btn-facebook">
                            <span class="icon"></span>
                            Login / Sign up with Facebook
                        </a>
                    </v-flex>
                </v-layout>
            </v-container>
        </main>
    </v-app>
</template>

<script>
  export default {
    name: 'fd-login',
    methods: {
      socialLink (provider) {
        return `${process.env.platformUrl}/auth/web/login/provider/${provider}/init/?redirectUrl=${this.redirectLink()}`
      },
      redirectLink () {
        return `${location.protocol}//${location.host}/social-callback`
      }

    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/styl">
    main {
        background url('../assets/img/photo-main.jpg')

        .btn-social {
            font-size 20px
            margin 0 0 15px 0
            padding 0 10px 0 70px
            display inline-block
            position relative
            height 60px
            width 100%
            line-height 64px
            text-align left
            text-decoration none
            cursor pointer
            border-radius 4px
            box-shadow 0 4px 4px 0 rgba(0, 0, 0, 0.24), 0 0 4px 0 rgba(0, 0, 0, 0.12)

            .icon {
                position absolute
                left 16px
                top 16px
                display block
            }
        }

        .btn-google {
            color black
            background-color white

            .icon {
                width 36px
                height 36px
                background-image url('../assets/icons/google.png')
            }
        }

        .btn-facebook {
            color white
            background-color #2553b4

            .icon {
                width 20px
                height 44px
                background-image url('../assets/icons/fb.png')
            }
        }
    }
</style>
