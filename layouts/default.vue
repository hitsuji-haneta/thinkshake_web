<template lang="pug">
  .container
      modal(v-if="showModal || opening" @close="showModal = false")
      .navibar
        navibar
      .main
        .main-content
          nuxt
          myFooter
</template>

<script>
import Navibar from '~/components/Navibar.vue'
import MyFooter from '~/components/MyFooter.vue'
import Modal from '~/components/Modal.vue'

export default {
  components: {
    Navibar,
    Modal,
    MyFooter
  },
  mounted: function() {
    this.$store.state.opening = false
  },
  computed: {
    opening() { return this.$store.state.opening },
    showModal() { return this.$store.state.modal },
  }
}
</script>

<style lang="stylus">
  primary-color = #3fafbe
  html {
    font-family: 'Rounded Mplus 1c', 'Source Code Pro', monospace, "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    color #35495e
    background-color #fefefe
  }

  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
  }

  .container
    position relative
    margin-left auto
    margin-right auto
    @media screen and (max-width: 500px)
      width 100%
    @media screen and (min-width: 500px)
      max-width 1080px

  .first_view
    transition 1s
    top 0
    left 0
    width 100%
    height 100%
    position fixed
    z-index 9999
    display table
    background-color primary-color

  .main
    width 100%
    overflow hidden
    @media screen and (max-width: 500px)
      padding-top 70px
    @media screen and (min-width: 500px)
      padding-left 200px

    &-content
      position absolute
      @media screen and (min-width: 500px)
        width 75%

  .navibar
    z-index 1
    @media screen and (max-width: 500px)
      background-color white
      display block
      position fixed
      height 70px
      width 100%
    @media screen and (min-width: 500px)
      position fixed
      top 40%
      left 0
      width 25%

  .slide-left-enter
    transform translateX(2000px)
    opacity 0
    &-active
      transition all .3s linear
  .slide-left-leave
    &-to
      transform translateX(-2000px)
      opacity 0
    &-active
      transition all .3s linear

  .slide-right-enter
    transform translateX(-2000px)
    opacity 0
    &-active
      transition all .3s linear
  .slide-right-leave
    &-to
      transform translateX(2000px)
      opacity 0
    &-active
      transition all .3s linear
</style>
