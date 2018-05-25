<template lang="pug">
  nav
    .link
      navi-button(text="about" path="#about")
      navi-button(text="works" path="#works")
      navi-button(text="contact" path="#contact")
</template>

<script>
import NaviButton from '~/components/NaviButton.vue'

export default {
  components: {
    NaviButton,
  },
}
</script>

<style lang="stylus" scoped>
  .link
    height 100%
    width 100%
    list-style none
    display flex
    justify-content center
    align-items center
    @media screen and (max-width: 500px)
      flex-direction row
      margin-top 15px
    @media screen and (min-width: 500px)
      flex-direction column
</style>
