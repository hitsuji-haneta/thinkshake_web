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
</style>