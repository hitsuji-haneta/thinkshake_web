<template lang="pug">
  section#works
    h1(class="sectionTitle") works
    p 過去に製作したシステムの中から、掲載許可を頂いた一部を公開しています。
    .works_wrapper
      work-card(modal_key="credentia")
      work-card(modal_key="co-labo")
      work-card(modal_key="ec")
      work-card(modal_key="F2R")
      work-card(modal_key="yukyu")
      work-card(modal_key="qiita")
      work-card(modal_key="web")
</template>

<script>
import WorkCard from '~/components/WorkCard.vue'

export default {
  components: {
    WorkCard,
  }
}
</script>

<style lang= "stylus" scoped>
  #works
    width 100%
    display flex
    justify-content top
    text-align center
    flex-direction column
    align-items center
    margin-bottom 30vh

  .works_wrapper
    width 100%
    display flex
    justify-content center
    flex-direction row
    align-items center
    align-content stretch
    flex-wrap wrap

  p
    font-size 1.2rem
    width 85%
    margin-top 40px
    margin-bottom 40px
</style>