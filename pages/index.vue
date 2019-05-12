<template lang="pug">
  .top_container
    top
    about
    works
    contact
    blog
    .box
      div(class="wave -one")
      div(class="wave -two")
      div(class="wave -three")
</template>

<script>
import { mapState } from "vuex";
import Top from "~/pages/top/Top.vue";
import About from "~/pages/top/About.vue";
import Works from "~/pages/top/Works.vue";
import Blog from "~/pages/top/Blog.vue";
import Contact from "~/pages/top/Contact.vue";

export default {
  transition: "slide-right",
  components: {
    Top,
    About,
    Works,
    Blog,
    Contact
  }
};
</script>

<style lang="stylus" scoped>
.box
  width 100%
  height 100%
  position fixed
  top 0
  left 0
  z-index -1
  overflow hidden

// -- wave --
wave-size = 15000px
.wave
  opacity 0.1
  position absolute
  top 'calc(70% - %s)' % wave-size
  left 'calc(50% - %s / 2)' % wave-size
  width wave-size
  height wave-size
  background-color #fff
  border-radius 49%
  border solid 2px primary-color
.wave.-one
  animation drift 20000ms infinite linear
.wave.-two
  animation drift 30000ms infinite linear
.wave.-three
  animation drift 40000ms infinite linear

@keyframes drift
  from { transform: rotate(0deg); }
  from { transform: rotate(360deg); }
</style>