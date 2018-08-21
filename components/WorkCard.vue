<template lang="pug">
  .card.card-wide(v-bind:id="modal_key" @click.stop="$store.commit('showModal', modal_key)" v-bind:style="duration" v-bind:class="{ card_open: isActive }")
    img(:src="image" v-bind:class="{ 'card_image-open': isActive }" class="card_image" )
    .card_content(v-bind:class="{ 'card_content-open': isActive, 'card_content-close': !isActive }")
      .card_texts(v-bind:class="{ 'card_texts-open': isActive }")
        .wrapper
          p(class="sub_text" v-bind:class="{ sub_text_open: isActive }") {{ subText }}
          p(class="main_text" v-bind:class="{ main_text_open: isActive }") {{ mainText }}
          p(class="content_text" v-if="isActive" v-html="contentText")
      .card_tags(v-if="tags.length !== 0" v-bind:class="{ 'card_tags-open': isActive }")
        work-tag(v-for="tag in tags" v-bind:tag_key="tag" v-bind:key="tag")
</template>

<script>
import Modal from '~/components/Modal.vue'
import WorkTag from '~/components/WorkTag.vue'
import modalSwitch from '~/assets/modalSwitch.js'

export default {
  props: ['modal_key'],
  components: {
    Modal,
    WorkTag,
  },
  data() {
    return { 
      mainText: modalSwitch(this.modal_key, 'mainText'),
      subText: modalSwitch(this.modal_key, 'subText'),
      tags: modalSwitch(this.modal_key, 'tags'),
      closedImage: modalSwitch(this.modal_key, 'closedImage'),
      openedImage: modalSwitch(this.modal_key, 'openedImage'),
      duration: `animation-duration: ${Math.random()+3}s`,
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
    width 100%
    transition 0.8s
    font-size 1.2rem
    &_open
      margin-top 5px

  .sub_text
    width 100%
    transition 0.8s
    font-size 0.9rem
    &_open
      margin-top 10px

  .content_text
    width 100%
    text-align left
    animation fadeIn 3.5s ease 0s 1 normal
    margin-top 10px
    font-size 0.9rem

  @keyframes vertical
    from { transform:translateY(-10px); }
    to { transform:translateY(  0px); }

  @keyframes fadeIn
    from { opacity: 0; }
    to { opacity: 1; }
</style>
