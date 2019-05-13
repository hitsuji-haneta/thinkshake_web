<template lang="pug">
  nav(class="sidebar")
    my-button(text="about" v-bind:onClick="aboutClick" v-bind:isActive="aboutActive")
    my-button(text="works" v-bind:onClick="worksClick" v-bind:isActive="worksActive")
    my-button(text="contact" v-bind:onClick="contactClick" v-bind:isActive="contactActive")
    //- my-button(text="blog" v-bind:onClick="blogClick" v-bind:isActive="blogActive")
</template>

<script>
import MyButton from '~/components/MyButton.vue'
import VueScrollTo from 'vue-scrollto'

export default {
  components: {
    MyButton
  },
  computed: {
    aboutActive() {
      return this.topActive('about')
    },
    worksActive() {
      return this.topActive('works')
    },
    contactActive() {
      return this.topActive('contact')
    },
    blogActive() {
      return this.$route.path.slice(0, 5) === '/blog'
    },
  },
  methods: {
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
      if (process.browser && this.isTopPage(this.$route.path)) {
        VueScrollTo.scrollTo(`#${buttonName}`, 700, { offset: -this.centerOfWindow() })
      } else {
        this.$router.push(`/#${buttonName}`)
      }
    },
    topActive: function(buttonName) {
      if (process.browser && this.isTopPage(this.$route.path)) {
        const [topPos, bottomPos] = this.$window.getElementPos(buttonName, this.centerOfWindow())
        return topPos <= this.$window.scrollY && this.$window.scrollY < bottomPos
      } else {
        return false
      }
    },
    centerOfWindow: function() {
      return process.browser ? this.$window.height/2 - 100 : 0
    },
    isTopPage: function(path) {
      return path === '/' || path.slice(0, 2) === '/#'
    },
  }
}
</script>

<style lang="stylus" scoped>
  .sidebar
    height 100%
    width 100%
    list-style none
    display flex
    justify-content center
    align-items center
    @media screen and (max-width: 500px)
      flex-direction row
      margin-top 15px
    @media screen and (min-width: 500px) and (max-width: 900px)
      width 80%
      margin 0 auto
      justify-content space-between
      flex-direction row
      margin-top 15px
    @media screen and (min-width: 900px)
      flex-direction column
</style>
