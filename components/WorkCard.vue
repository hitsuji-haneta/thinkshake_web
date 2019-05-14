<template lang="pug">
  .card.card-square(v-bind:id="modal_key" @click.stop="$store.commit('showModal', modal_key)" v-bind:style="duration" v-bind:class="{ card_open: isActive }")
    .card_imageWrapper(v-bind:class="{ 'card_imageWrapper-open': isActive }")
      img(:src="image" v-bind:class="{ 'card_image-open': isActive }" class="card_image")
    .card_content(v-bind:class="{ 'card_content-open': isActive, 'card_content-close': !isActive }")
      .card_texts(v-bind:class="{ 'card_texts-open': isActive }")
        p(class="sub_text" v-if="isActive") {{ subText }}
        p(class="main_text" v-bind:class="{ main_text_open: isActive }") {{ mainText }}
        p(class="content_text" v-if="isActive" v-html="contentText")
</template>

<script>
import Modal from '~/components/Modal.vue'
// import WorkTag from '~/components/WorkTag.vue'
import modalSwitch from '~/assets/modalSwitch.js'

export default {
  props: ['modal_key'],
  components: {
    Modal,
    // WorkTag,
  },
  data() {
    return {
      mainText: modalSwitch(this.modal_key, 'mainText'),
      subText: modalSwitch(this.modal_key, 'subText'),
      tags: modalSwitch(this.modal_key, 'tags'),
      closedImage: modalSwitch(this.modal_key, 'closedImage'),
      openedImage: modalSwitch(this.modal_key, 'openedImage'),
      duration: `animation-duration: ${Math.random()+2.5}s`,
      contentText: modalSwitch(this.modal_key, 'contentText'),
    }
  },
  computed: {
    showModal() { return this.$store.state.modal },
    isActive() { return this.$store.state.modal_key === this.modal_key },
    image() { return this.$store.state.modal_key === this.modal_key ? this.openedImage : this.closedImage }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    display table-cell
    width 100%
    text-align center
    vertical-align middle

  .main_text
    display inline-block
    text-align left
    transition 0.8s
    @media screen and (max-width: 500px)
      font-size 0.8rem
    @media screen and (min-width: 500px)
      font-size 1rem
    &_open
      font-size 1.2rem
      font-weight 500

  .sub_text
    width 100%
    transition 0.8s
    font-size 0.9rem
    @media screen and (max-width: 500px)
      font-size 0.9rem
      padding-top 10px
    @media screen and (min-width: 500px)
      font-size 1rem
      padding 10px 50px

  .content_text
    width 100%
    text-align left
    animation fadeIn 3.5s ease 0s 1 normal
    @media screen and (max-width: 500px)
      font-size 0.9rem
      padding-top 10px
    @media screen and (min-width: 500px)
      font-size 1rem
      padding 20px 50px

  @keyframes fadeIn
    from { opacity: 0; }
    to { opacity: 1; }
</style>
