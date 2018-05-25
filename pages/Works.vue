<template lang="pug">
  section#works
    h1 works
    p 過去に製作したシステムの中から、掲載許可を頂いた一部を公開しています。
    card(text_main="実験機器シェアリングサービス", text_sub="株式会社Co-LABO MAKER 様",　modal_key="co-labo")
    card(text_main="通信制高校向け教務管理システム", modal_key="ec")
    card(text_main="人口関連多次元表作成プログラム", text_sub="国交省 国土技術政策総合研究所 様",　modal_key="F2R")
    card(text_main="有給管理システム", modal_key="yukyu")
    card(text_main="このwebサイト", modal_key="web")
</template>

<script>
import Card from '~/components/Card.vue'

export default {
  components: {
    Card,
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
    font-size 1.2em
    width 85%
    margin-top 40px
    margin-bottom 40px
</style>