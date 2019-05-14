<template lang="pug">
  header
    nuxt-link(to="/" class="wrapper-logo")
      img#logo(src="~/assets/logo.png" v-bind:class="{ img_active: isActive }")
    h1 thinkShake製作所<br/>業務日報
</template>

<script>
export default {
  computed: {
    isActive() { 
      if (process.browser) {
        return this.$window.scrollY === 0
      } else {
        return false
      }
    },
  },
  mounted: function() {
    document.getElementById('logo').classList.add('img_opening')
  }
}
</script>

<style lang="stylus" scoped>
  header
    width 100%
    display flex
    justify-content top
    text-align center
    flex-direction column
    align-items center
    margin-bottom 50px

  .wrapper-logo
    width 200px
    @media screen and (max-width: 500px)
      width 150px

  .img
    &_active
      animation shake 2s linear 1
      transform-origin 50% 50%
    &_opening
      animation shake 2s linear 1s 1
      transform-origin 50% 50%
</style>