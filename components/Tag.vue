<template lang="pug">
  .tag
    img(:src="image")
    p {{ text }}
</template>

<script>
export default {
  props: ['tag_key'],
  data() {
    return {
      text: this.tag_key,
      image: `/${this.tag_key}.png`,
      // image: '/logo.png'
    }
  }
}
</script>

<style lang="stylus" scoped>
  .tag
    background-color #465A6E
    display inline-block
    font-size 0.5em
    border-radius 4px
    height 20px
    line-height 20px
    width 70px
    text-align center
    margin-right 5px
    margin-bottom 5px
  
  img
    display inline-block
    margin-right 5px
    height 17px
    vertical-align middle

  p
    color #ffffff
    display inline-block
    vertical-align middle

</style>
