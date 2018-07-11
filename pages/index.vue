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
import Top from '~/pages/top/Top.vue'
import About from '~/pages/top/About.vue'
import Works from '~/pages/top/Works.vue'
import Blog from '~/pages/top/Blog.vue'
import Contact from '~/pages/top/Contact.vue'

export default {
    components: {
      Top,
      About,
      Works,
      Blog,
      Contact,
    }
}
</script>
