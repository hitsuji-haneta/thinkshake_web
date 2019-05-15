<template lang="pug">
  section#skills
    h1(class="sectionTitle") skills
    p 持っている技術の一部をご紹介しています。
    .skills_wrapper
      ul(class="circle_box" v-circle)
        li(class="circle_item") TypeScript
        li(class="circle_item") Python
        li(class="circle_item") R
        li(class="circle_item") Go
        li(class="circle_item") React.js
        li(class="circle_item") React<br/>Native
        li(class="circle_item") Redux
        li(class="circle_item") Vue.js
        li(class="circle_item") Nuxt.js
        li(class="circle_item") Node.js
        li(class="circle_item") Ruby<br/>on Rails
        li(class="circle_item") GraphQL
        li(class="circle_item") EOS
        li(class="circle_item") Ethereum
        li(class="circle_item") Solidity
        li(class="circle_item") SQL
        li(class="circle_item") MongoDB
        li(class="circle_item") Firebase
        li(class="circle_item") AWS
        li(class="circle_item") GCP
        li(class="circle_item") CircleCI
        li(class="circle_item") Docker
</template>

<script>
import MyButton from '~/components/MyButton.vue'

export default {
  directives: {
    circle: {
      inserted: function(el) {
        const items = el.children
        console.log(items.length);
        const deg = 360.0 / items.length
        const radian = deg * Math.PI / 180.0
        const radius = 300
        const center = 400
        Array.forEach(items, (el, i) => {
          const x = Math.cos(radian * i) * radius + 350
          const y = Math.sin(radian * i) * radius + center
          el.setAttribute("style", `top: ${y}px; left: ${x}px;`)
        })
      }
    }
  },
}
</script>

<style lang="stylus" scoped>
#skills
  width 100%
  display flex
  justify-content top
  text-align center
  flex-direction column
  align-items center
  margin-bottom 30vh
  overflow hidden
  @media screen and (max-width: 500px)
    height 90vh
  @media screen and (min-width: 500px)
    height 110vh
  & > p
      font-size 1.2rem
      width 85%
      margin-top 40px

.skills_wrapper
  position relative
  overflow hidden
  @media screen and (max-width: 500px)
    right -60vw
  @media screen and (min-width: 500px)
    right 0

.circle_box
  position relative
  width 800px
  height 800px
  animation drift 20000ms infinite linear

.circle_item
  font-size 1.2rem
  font-weight 500
  display inline-block
  position absolute
  animation drift-reverse 20000ms infinite linear
  -webkit-transition all .5s
  &:hover
    color primary-color

.form
  height 300px
  width 80%

@keyframes drift
  from { transform: rotate(0deg); }
  from { transform: rotate(360deg); }
@keyframes drift-reverse
  from { transform: rotate(0deg); }
  from { transform: rotate(-360deg); }
</style>