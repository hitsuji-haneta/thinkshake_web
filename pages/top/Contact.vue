<template lang="pug">
  section#contact
    h1(class="sectionTitle") contact
    p お問合せはこちらから。<br/>お気軽にどうぞ！
    .form
      my-button(text="mail" v-bind:onClick="onClick" v-bind:isActive="isActive")
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
      location.href = 'mailto:s.takahashi@thinkshake.net'
    }
  }
}
</script>

<style lang="stylus" scoped>
  #contact
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