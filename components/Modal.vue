<template lang="pug">
  transition(name="modal")
    .modal_mask(@click="$store.commit('closeModal')" v-bind:class="{ opening: opening }")
</template>

<script>
export default {
  computed: {
    opening() { return this.$store.state.opening },
  },
  mounted: function() {
    const store = this.$store
    window.addEventListener("popstate", function(e) {
      if (store.state.modal) {
        e.preventDefault();
        e.stopPropagation();
        store.commit('closeModal')
      }
    }, false);
  }
}
</script>

<style lang="stylus" scoped>
.modal_mask
  position fixed
  z-index 10
  top 0
  left 0
  width 120%
  height 120%
  background-color rgba(0, 0, 0, .7)
  display table
  transition opacity .5s ease
.opening
  background-color #d8f3f2
  transition opacity .7s ease

.modal-enter
  opacity 0

.modal-leave-active
  opacity 0

.modal-enter .modal-container,
.modal-leave-active .modal-container
  -webkit-transform scale(1.1)
  transform scale(1.1)

</style>
