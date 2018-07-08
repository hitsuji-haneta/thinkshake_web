<template lang="pug">
  span(v-bind:style="h_duration" class="button-movable_wrapper")
    a(href="#" v-scroll-to="{ el: path, offset: -(centerOfWindow) }" class="button button-movable" v-bind:class="{ button_selected: isActive }" v-bind:style="v_duration") {{ text }}
</template>

<script>
export default {
  props: ['text', 'path'],
  data() {
    return {
      h_duration: `animation-duration: ${Math.random()+1}s`,
      v_duration: `animation-duration: ${Math.random()+1}s`,
    }
  },
  computed: {
    isActive() {
      const base = this.centerOfWindow + 1
      if (process.browser && this.$route.path === '/') {
        let topPos = 0;
        let bottomPos = 0;
        switch (this.path) {
          case '#about':
            topPos = document.getElementById('about').getBoundingClientRect().top + this.$window.scrollY - base
            bottomPos = document.getElementById('works').getBoundingClientRect().top + this.$window.scrollY - base
            break;
          case '#works':
            topPos = document.getElementById('works').getBoundingClientRect().top + this.$window.scrollY - base
            bottomPos = document.getElementById('contact').getBoundingClientRect().top + this.$window.scrollY - base
            break;
          case '#contact':
            topPos = document.getElementById('contact').getBoundingClientRect().top + this.$window.scrollY - base
            bottomPos = 9999
            break;
          default:
            break;
        }
        return topPos <= this.$window.scrollY && this.$window.scrollY < bottomPos
      }
    },
    centerOfWindow() {
      if (process.browser) {
        return this.$window.height/2 - 100
      } else {
        return 0
      }
    }
  }
}
</script>

