<template lang="pug">
  section#about
    h1(class="sectionTitle") about
    div(class="box" v-bind:class="{ show: showBox }")
      img(src="profile.png" class="profile_image")
      img(src="profile_open.jpg" class="profile_image profile_secondImage" v-bind:class="{ show: showImage }")
      .profile_text
        p(class="profile_name") 高橋翔太について
        p 1986年福島県大玉村生まれ、宮城県仙台市在住です。
        p 東北大学大学院修士課程修了後、株式会社NTTデータにて開発・マネジメント業務に従事しました。
        p 退職後、2016年より「thinkShake製作所」を創業し、フリーのwebエンジニアとして活動をしています。
        p 経済産業省主催「ブロックチェーンハッカソン2019」にて、コンピュータ・ソフトウェア協会賞を受賞しました。
        p 音楽と甘いものが好きです。
</template>

<script>
import VueScrollTo from 'vue-scrollto'
export default {
  methods: {
    isShown: function(start, end) {
      if (process.browser) {
        const [topPos, bottomPos] = this.$window.getElementPos('about', this.centerOfWindow())
        return topPos + start <= this.$window.scrollY && this.$window.scrollY < bottomPos + end
      } else {
        return false
      }
    },
    centerOfWindow: function() {
      return process.browser ? this.$window.height/2 : 0
    },
  },
  computed: {
    showBox() {
      return this.isShown(-100, 300)
    },
    showImage() {
      return this.isShown(300, 300)
    },
  }
}
</script>

<style lang= "stylus" scoped>
  #about
    width 100%
    display flex
    justify-content top
    text-align center
    flex-direction column
    align-items center
    margin-bottom 30vh
    overflow hidden

  #about > p
    font-size 1.2rem
    width 85%
    margin-top 40px
    margin-bottom 40px

  .box
    width 90%
    opacity 0
    border-radius 20px
    background-color rgba(255, 255, 255, 0.5)
    box-shadow inset 0px 0px 10px 10px BG-color
    padding 20px 5px
    display flex
    flex-direction column
    align-items center
    -webkit-transition all .5s
    -webkit-transform translate(100px, 0)

  .profile_image
    margin 20px auto
    @media screen and (max-width: 500px)
      height 150px
    @media screen and (min-width: 500px)
      height 250px

  .profile_secondImage
    position absolute
    opacity 0
    -webkit-transition all .5s

  .show
    -webkit-transform translate(0px, 0)
    opacity 1

  .profile_text
    text-align left
    letter-spacing 0.1rem
    @media screen and (max-width: 500px)
      padding 0 10px
    @media screen and (min-width: 500px)
      padding 0 100px
    & > p
      margin-bottom 10px

  .profile_name
    display inline-block
    font-size 1.3rem
    margin 20px 0
    border-bottom solid 1.5px base-color
</style>