<template lang="pug">
  .index_container
    top
    about
    works
    toBlog
    contact
    myFooter
</template>

<script>
import { mapState } from 'vuex'
import Top from '~/pages/Top.vue'
import About from '~/pages/About.vue'
import Works from '~/pages/Works.vue'
import toBlog from '~/pages/toBlog.vue'
import Contact from '~/pages/Contact.vue'
import MyFooter from '~/pages/MyFooter.vue'

export default {
    components: {
      Top,
      About,
      Works,
      toBlog,
      Contact,
      MyFooter,
    }
}
</script>
