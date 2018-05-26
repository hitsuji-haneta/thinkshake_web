<template lang="pug">
  footer#footer(v-bind:style="{ marginTop: marginTop + 'px' }")
    p Copyright(c) {{ year }} thinkShake. All Rights Reserved.
</template>

<script>
export default {
  data() {
    return { year: new Date().getFullYear() }
  },
  computed: {
    marginTop() {
      if (process.browser) {
        let base = 168
        if ( this.$window.height < 500 ) base = 201
        return this.$window.height/2 - base
      } else {
        return 0
      }
    }
  }
}
</script>

<style lang= "stylus" scoped>
  #footer
    width 100%
    display flex
    justify-content top
    text-align center
    flex-direction column
    align-items center
    margin-bottom 10px

  p
    font-size 0.7rem
    width 85%
</style>