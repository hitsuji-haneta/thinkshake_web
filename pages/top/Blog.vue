<template lang="pug">
  section#blog
    h1 blog
    p ブログはこちらから。
    .form
      my-button(text="blog" v-bind:onClick="onClick" v-bind:isActive="isActive")
</template>

<script>
import MyButton from '~/components/MyButton.vue'

export default {
  components: {
    MyButton,
  },
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    onClick: function() {
      this.$router.push(`/blog`)
    }
  }
}
</script>

<style lang="stylus" scoped>
  #blog
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