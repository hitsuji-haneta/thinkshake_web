<template lang="pug">
  span(v-bind:style="h_duration" class="button-movable_wrapper")
    a(href="#" @click.stop.prevent="actionClick(name)" class="button button-movable" v-bind:class="{ button_selected: isActive }" v-bind:style="v_duration") {{ name }}
</template>

<script>
import VueScrollTo from 'vue-scrollto'

export default {
  props: ['name'],
  data() {
    return {
      h_duration: `animation-duration: ${Math.random()+1}s`,
      v_duration: `animation-duration: ${Math.random()+1}s`,
      topPos: 0,
      bottomPos: 0,
    }
  },
  mounted() {
    if (this.isTopPage(this.$route.path)) {
      const base = this.centerOfWindow()
      switch (this.name) {
        case 'about':
          this.topPos = document.getElementById('about').getBoundingClientRect().top + this.$window.scrollY - base
          this.bottomPos = document.getElementById('works').getBoundingClientRect().top + this.$window.scrollY - base
          break;
        case 'works':
          this.topPos = document.getElementById('works').getBoundingClientRect().top + this.$window.scrollY - base
          this.bottomPos = document.getElementById('contact').getBoundingClientRect().top + this.$window.scrollY - base
          break;
        case 'contact':
          this.topPos = document.getElementById('contact').getBoundingClientRect().top + this.$window.scrollY - base
          this.bottomPos = 9999
          break;
        default:
          break;
      }
    }
  },
  computed: {
    isActive() {
      if (process.browser) {
        if (this.isTopPage(this.$route.path)) {
          return this.topPos <= this.$window.scrollY && this.$window.scrollY < this.bottomPos
        } else if (this.name === 'blog') {
          return this.isBlogPage(this.$route.path)
        } else {
          return false
        }
      }
    }
  },
  methods: {
    actionClick: function(name) {
      if (process.browser) {
        if (name === 'blog') {
          this.$router.push('/blog')
        } else if (this.isTopPage(this.$route.path)) {
          VueScrollTo.scrollTo(`#${name}`, 700, { offset: -this.centerOfWindow() })
        } else {
          this.$router.push(`/#${name}`)
        }
      }
    },
    centerOfWindow: function() {
      if (process.browser) {
        return this.$window.height/2 - 100
      } else {
        return 0
      }
    },
    isTopPage: function(path) {
      return path === '/' || path.slice(0, 2) === '/#'
    },
    isBlogPage: function(path) {
      return path.slice(0, 5) === '/blog'
    }
  }
}
</script>

