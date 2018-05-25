<template lang="pug">
  footer#footer
    p Copyright(c) {{ year }} thinkShake. All Rights Reserved.
</template>

<script>
export default {
  data() {
    return { year: new Date().getFullYear() }
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
    font-size 0.7em
    width 85%
</style>