<template lang="pug">
  menu(class="header_wrapper")
    button(type="button" class="menu_button" @click="toggleOpen($store.state.toggleMenu)")
      span(class="menu_line-top" v-bind:class="{ 'menu_button-open': $store.state.toggleMenu }")
      span(class="menu_line-middle" v-bind:class="{ 'menu_button-open': $store.state.toggleMenu }")
      span(class="menu_line-bottom" v-bind:class="{ 'menu_button-open': $store.state.toggleMenu }")

    nav(class="menu_wrapper" v-bind:class="{ 'menu_wrapper-open': $store.state.toggleMenu }")
      ul(class='menu_items')
        li
          a(href="#" class="menu_item" @click.stop.prevent="aboutClick") about
        li
          a(href="#" class="menu_item" @click.stop.prevent="worksClick") works
        li
          a(href="#" class="menu_item" @click.stop.prevent="contactClick") contact
        //- li
        //-   a(href="#" class="menu_item" @click.stop.prevent="blogClick") blog
</template>

<script>
import { mapActions } from 'vuex'
import VueScrollTo from 'vue-scrollto'

export default {
  methods: {
    ...mapActions(['closeModal', 'openMenu']),
    toggleOpen(toggleMenu) {
      if (toggleMenu) {
        this.closeModal()
      } else {
        this.openMenu()
      }
    },
    aboutClick: function() {
      this.topClick('about')
    },
    worksClick: function() {
      this.topClick('works')
    },
    contactClick: function() {
      this.topClick('contact')
    },
    blogClick: function() {
      this.$router.push(`/blog`)
    },
    topClick: function(buttonName) {
      this.closeModal()
      if (process.browser) {
        VueScrollTo.scrollTo(`#${buttonName}`, 700, { offset: -this.centerOfWindow() })
      } else {
        this.$router.push(`/#${buttonName}`)
      }
    },
    centerOfWindow: function() {
      return process.browser ? this.$window.height/2 - 100 : 0
    },
  },
}
</script>

<style lang="stylus" scoped>
.menu_wrapper
  display none
  &-open
    display block

.menu_items
  display flex
  position fixed
  top 10%
  right 10%
  height 70%
  flex-direction column
  align-items flex-end
  justify-content space-around

.menu_button
  position relative
  display inline-block
  width 30px
  height 40px
  background-color transparent
  cursor pointer
  outline none
  appearance none
  border none
  padding 0

.menu_item
  font-size 4rem
  color BG-color
  text-decoration none
  -webkit-transition all .5s
  &:hover
    color primary-color
  &:active
    color primary-color

.menu_line-top
  top 0px
.menu_line-middle
  top 10px
.menu_line-bottom
  top 20px

.menu_line-top,
.menu_line-middle,
.menu_line-bottom
  position absolute
  display block
  width 100%
  height 3px
  border-radius 3px
  transition 0.15s ease-out
  background-color base-color

.menu_button-open
  // 真ん中の線
  &.menu_line-top
    width 0
    opacity 0
    transform translateX(20px) rotate(90deg)
    background-color BG-color
  // 上の線
  &.menu_line-middle
    width 30px
    transform translateY(5px) rotate(-135deg)
    background-color BG-color
  // 下の線
  &.menu_line-bottom
    width 30px
    transform translateY(-5px) rotate(135deg)
    background-color BG-color
</style>