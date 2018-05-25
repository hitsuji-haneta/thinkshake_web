<template lang="pug">
  section#contact
    h1 contact
    p お問合せはこちらから。お気軽にどうぞ！
    .form
      span(v-bind:style="h_duration")
        a(href="mailto:s.takahashi@thinkshake.net" class="button" v-bind:style="v_duration") mail
</template>

<script>
export default {
  data() {
    return {
      h_duration: `animation-duration: ${Math.random()+1}s`,
      v_duration: `animation-duration: ${Math.random()+1}s`,
    }
  }
}
</script>

<style lang= "stylus" scoped>
  #contact
    width 100%
    display flex
    justify-content top
    text-align center
    flex-direction column
    align-items center
    @media screen and (max-width: 500px)
      margin-bottom 100px
    @media screen and (min-width: 500px)
      margin-bottom 200px

  p
    font-size 1.2rem
    width 85%
    margin-top 40px
    margin-bottom 40px

  .form
    height 300px
    width 80%

  span
    vertical-align middle
    animation horizontal 1s ease-in-out infinite alternate
  span:hover
    animation-name none

  a
    animation vertical 1s ease-in-out infinite alternate

  @keyframes horizontal
    from { transform:translateX(-3px); }
    to { transform:translateX(  0px); }

  @keyframes vertical
    from { transform:translateY(-10px); }
    to { transform:translateY(  0px); }
</style>