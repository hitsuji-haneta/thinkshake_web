<template lang="pug">
  section#works
    h1 works
    p 過去に製作したシステムの中から、掲載許可を頂いた一部を公開しています。
    work-card(text_main="実験機器シェアリングサービス", text_sub="株式会社Co-LABO MAKER 様",　modal_key="co-labo")
    work-card(text_main="通信制高校向け教務管理システム", modal_key="ec")
    work-card(text_main="人口関連多次元表作成プログラム", text_sub="国交省 国土技術政策総合研究所 様",　modal_key="F2R")
    work-card(text_main="有給管理システム", modal_key="yukyu")
    work-card(text_main="このwebサイト", modal_key="web")
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
    margin-bottom 300px

  p
    font-size 1.2rem
    width 85%
    margin-top 40px
    margin-bottom 40px
</style>