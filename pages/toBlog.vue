<template lang="pug">
  section#toBlog
    h1 blog
    p ブログはこちらから。
    .form
      span(v-bind:style="h_duration" class="button-movable_wrapper")
        nuxt-link(:to="{ name: 'blog' }" v-bind:style="v_duration" class="button button-movable") blog
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
  #toBlog
    width 100%
    display flex
    justify-content top
    text-align center
    flex-direction column
    align-items center

  p
    font-size 1.2rem
    width 85%
    margin-top 40px
    margin-bottom 40px

  .form
    height 300px
    width 80%
</style>