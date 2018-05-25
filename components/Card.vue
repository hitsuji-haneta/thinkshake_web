<template lang="pug">
  .wrapper(v-bind:id="modal_key" @click="$store.commit('showModal', modal_key)" v-bind:style="duration" v-bind:class="{ wrapper_open: isActive }")
    img(:src="image" v-bind:class="{ img_open: isActive }")
    .content
      .text_wrapper(v-bind:class="{ text_wrapper_open: isActive }")
        p(class="sub_text" v-bind:class="{ sub_text_open: isActive }") {{ subText }}
        p(class="main_text" v-bind:class="{ main_text_open: isActive }") {{ mainText }}
        p(class="content_text" v-if="isActive" v-html="contentText")
      .tag_wrapper(v-bind:class="{ tag_wrapper_open: isActive }")
        tag(v-for="tag in tags" v-bind:tag_key="tag")
</template>

<script>
import Modal from '~/components/Modal.vue'
import Tag from '~/components/Tag.vue'
import modalSwitch from '~/assets/modalSwitch.js'

export default {
  props: ['modal_key'],
  components: {
    Modal,
    Tag,
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

<style lang= "stylus" scoped>
  primary-color = #3fafbe

  .wrapper
    background-color #ffffff
    margin 20px auto
    box-shadow 1px 2px 3px 1px rgba(0,0,0,0.2)
    border 1.5px solid #35495e
    font-size 1.5em
    transition 0.7s
    display flex
    flex-direction row
    animation vertical 2s ease-in-out infinite alternate
    @media screen and (max-width: 500px)
      width 95%
      height 180px
    @media screen and (min-width: 500px)
      width 85%
      height 200px
  .wrapper:hover
    box-shadow 4px 8px 16px 4px rgba(0,0,0,0.2)
    border 1.5px solid primary-color
    animation-name none
  .wrapper_open
    z-index 9999
    background-color #ffffff
    flex-direction column
    @media screen and (max-width: 500px)
      height 500px
    @media screen and (min-width: 500px)
      height 700px
      width 90%

  img
    transition 0.8s
    @media screen and (max-width: 500px)
      height 100px
      margin 30px 0px 30px 5px
    @media screen and (min-width: 500px)
      height 170px
      margin 15px 0px 15px 30px
  .img_open
    margin 20px auto
    @media screen and (max-width: 500px)
      height 150px
    @media screen and (min-width: 500px)
      height 250px

  .content
    flex-grow 3
    margin 5px 10px
    height 100%
    width 100%

  .text_wrapper
    position relative
    margin 0 auto
    @media screen and (max-width: 500px)
      height 75%
    @media screen and (min-width: 500px)
      height 80%
  .text_wrapper_open
    @media screen and (max-width: 500px)
      height 70%
      width 280px
    @media screen and (min-width: 500px)
      height 70%
      width 500px

  .main_text
    position absolute
    top 50%
    width 100%
    text-align center
    transition 0.8s
    @media screen and (max-width: 500px)
      font-size 0.7em
  .main_text_open
    top 10%

  .sub_text
    position absolute
    top 30%
    width 100%
    text-align center
    transition 0.8s
    @media screen and (max-width: 500px)
      font-size 0.45em
    @media screen and (min-width: 500px)
      font-size 0.7em
  .sub_text_open
    top 0%

  .content_text
    position absolute
    top 30%
    width 100%
    text-align left
    animation fadeIn 3.5s ease 0s 1 normal
    @media screen and (max-width: 500px)
      font-size 0.45em
    @media screen and (min-width: 500px)
      font-size 0.7em

  .tag_wrapper
    display flex
    flex-direction row
    justify-content flex-end
    align-items flex-end
    width 100%
    transition 0.8s
  .tag_wrapper_open
    margin-top 20px
    justify-content center

  @keyframes vertical
    from { transform:translateY(-10px); }
    to { transform:translateY(  0px); }

  @keyframes fadeIn
    from { opacity: 0; }
    to { opacity: 1; }

</style>
