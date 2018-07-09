<template lang="pug">
  .index_container
    top
    about
    works
    contact
    blog
    myFooter
</template>

<script>
import { mapState } from 'vuex'
import Top from '~/pages/Top.vue'
import About from '~/pages/About.vue'
import Works from '~/pages/Works.vue'
import Blog from '~/pages/Blog.vue'
import Contact from '~/pages/Contact.vue'
import MyFooter from '~/pages/MyFooter.vue'

export default {
    components: {
      Top,
      About,
      Works,
      Blog,
      Contact,
      MyFooter,
    }
}
</script>
