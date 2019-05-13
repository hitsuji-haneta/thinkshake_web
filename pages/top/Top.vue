<template lang="pug">
  section#top
    img#logo(src="~/assets/logo.png" v-bind:class="{ img_active: isActive }" v-bind:style="{ marginTop: marginTop + 'px' }")
    p(class="top_text") ようこそ!<br/>thinkShake製作所はwebエンジニア高橋翔太の個人企業です。
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
    marginTop() {
      if (process.browser) {
        let base = 168
        if ( this.$window.height < 500 ) base = 201
        return this.$window.height/2 - base
      } else {
        return 0
      }
    }
  },
  mounted: function() {
    document.getElementById('logo').classList.add('img_opening')
  }
}
</script>

<style lang="stylus" scoped>
  #top
    width 100%
    height 100%
    display flex
    justify-content top
    text-align center
    flex-direction column
    align-items center

  img
    margin-bottom 400px
    @media screen and (max-width: 500px)
      width 60%
  .img_active
    animation shake 2s linear 1
    transform-origin 50% 50%
  .img_opening
    animation shake 2s linear 0.2s 1
    transform-origin 50% 50%

  .top_text
    max-width 90%
    font-size 1.5rem
    margin-bottom 10vh
</style>