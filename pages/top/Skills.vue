<template lang="pug">
  section#skills
    h1 skills
    ul(class="circle_box")
      li(class="circle_item") React.js
      li(class="circle_item") React Native
      li(class="circle_item") Redux
      li(class="circle_item") Vue.js
      li(class="circle_item") Nuxt.js
      li(class="circle_item") Ruby on Rails
      li(class="circle_item") Express
      li(class="circle_item") Node.js
      li(class="circle_item") Ethereum
      li(class="circle_item") Solidity
      li(class="circle_item") Python
      li(class="circle_item") Go
      li(class="circle_item") Python
      li(class="circle_item") R
      li(class="circle_item") Java
      li(class="circle_item") GraphQL
      li(class="circle_item") AWS
      li(class="circle_item") GCP
      li(class="circle_item") Firebase
      li(class="circle_item") MySQL
      li(class="circle_item") PostgreSQL
      li(class="circle_item") MongoDB
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
  #skills
    width 100%
    display flex
    justify-content top
    text-align center
    flex-direction column
    align-items center
    margin-bottom 30vh

  .circle_box
    // position relative
    margin 20px auto
    display flex
    justify-content start
    flex-direction row
    align-items center
    align-content stretch
    flex-wrap wrap
    width 100%
    // @media screen and (max-width: 500px)
    //   width 90%
    // @media screen and (min-width: 500px)
    //   width 80%

  .circle_item
    font-size 1.2rem
    display inline-block
    // width 100px
    // border solid 1px
    // position absolute
    // width 85%
    // margin-top 40px
    // margin-bottom 40px
    margin 20px 0
    @media screen and (max-width: 500px)
      width 100px
    @media screen and (min-width: 500px)
      width 200px

  .form
    height 300px
    width 80%
</style>