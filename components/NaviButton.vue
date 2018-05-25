<template lang="pug">
  span(v-bind:style="h_duration")
    a(href="#" v-scroll-to="{ el: path, offset: -80 }" class="button" v-bind:class="{ button_selected: isActive }" v-bind:style="v_duration") {{ text }}
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
      const base = 200
      if (process.browser) {
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
        return topPos < this.$window.scrollY && this.$window.scrollY < bottomPos
      }
    },
  }
}
</script>

<style lang= "stylus" scoped>
  primary-color = #3fafbe

  .button_selected
    color #fff
    border 1.5px solid primary-color
    background-color primary-color

  span
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

