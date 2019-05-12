<template lang="pug">
  .container
      modal(v-if="showModal || opening" @close="showModal = false")
      div(class="navi navi-side")
        navibar
      div(class="navi navi-head" v-bind:class="{ 'navi_menu-open': $store.state.toggleMenu }")
        my-menu
      .main
        .main-content
          blog-header(v-if="isNotTop")
          nuxt
          myFooter
</template>

<script>
import Navibar from '~/components/Navibar.vue'
import MyMenu from '~/components/MyMenu.vue'
import BlogHeader from '~/components/BlogHeader.vue'
import MyFooter from '~/components/MyFooter.vue'
import Modal from '~/components/Modal.vue'

export default {
  components: {
    Navibar,
    MyMenu,
    Modal,
    BlogHeader,
    MyFooter
  },
  mounted: function() {
    this.$store.state.opening = false
  },
  computed: {
    opening() { return this.$store.state.opening },
    showModal() { return this.$store.state.modal },
    isNotTop() { return !(this.$route.path === '/' || this.$route.path.slice(0, 2) === '/#') }
  }
}
</script>

<style lang="stylus" scoped>
.container
  position relative
  margin-left auto
  margin-right auto
  @media screen and (max-width: 500px)
    width 100%
  @media screen and (min-width: 500px)
    max-width 1080px

.main
  width 100%
  overflow hidden
  @media screen and (max-width: 900px)
    padding-top 70px
  @media screen and (min-width: 900px)
    padding-left 200px
  &-content
    position absolute
    @media screen and (max-width: 900px)
      width 100%
    @media screen and (min-width: 900px)
      width 75%

.navi
  z-index 1
.navi-side
  @media screen and (max-width: 900px)
    display none
  @media screen and (min-width: 900px)
    position fixed
    top 40%
    left 0
    width 25%
.navi-head
  @media screen and (max-width: 900px)
    position fixed
    top 5%
    right 10%
  @media screen and (min-width: 900px)
    display none
.navi_menu-open
  z-index 100
</style>
