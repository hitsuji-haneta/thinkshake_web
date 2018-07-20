<template lang="pug">
  .container
      modal(v-if="showModal || opening" @close="showModal = false")
      .navi
        navibar
      .main
        .main-content
          blog-header(v-if="isNotTop")
          nuxt
          myFooter
</template>

<script>
import Navibar from '~/components/Navibar.vue'
import BlogHeader from '~/components/BlogHeader.vue'
import MyFooter from '~/components/MyFooter.vue'
import Modal from '~/components/Modal.vue'

export default {
  components: {
    Navibar,
    Modal,
    BlogHeader,
    MyFooter
  },
  mounted: function() {
    this.$store.state.opening = false
  },
  computed: {
    opening() { return this.$store.state.opening },
    showModal() { return this.$store.state.modal },
    isNotTop() { return !(this.$route.path === '/' || this.$route.path.slice(0, 2) === '/#') }
  }
}
</script>
