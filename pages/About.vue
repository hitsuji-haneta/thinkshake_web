<template lang="pug">
  section#about
    h1 about
    p ようこそ!<br/>thinkShake製作所はエンジニア高橋翔太の個人企業です。
    card(text_main="profile", modal_key="profile")
</template>

<script>
import Card from '~/components/Card.vue'
export default {
  components: {
    Card,
  }
}
</script>

<style lang= "stylus" scoped>
  #about
    width 100%
    display flex
    justify-content top
    text-align center
    flex-direction column
    align-items center
    margin-bottom 300px

  p
    font-size 1.2rem
    width 85%
    margin-top 40px
    margin-bottom 40px
</style>