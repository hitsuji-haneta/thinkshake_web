<template lang="pug">
  span(v-bind:style="h_duration" class="button-movable_wrapper")
    a(href="#" @click.stop.prevent="onClick" class="button button-movable" v-bind:class="{ button_selected: isActive }" v-bind:style="v_duration") {{ text }}
</template>

<script>
export default {
  props: ['text', 'onClick', 'isActive'],
  data() {
    return {
      h_duration: `animation-duration: ${Math.random()+1}s`,
      v_duration: `animation-duration: ${Math.random()+1}s`,
    }
  }
}
</script>

<style lang= "stylus">
  primary-color = #3fafbe

  .button
    display inline-block
    border 1.5px solid #35495e
    color #35495e
    text-decoration none
    text-align center
    vertical-align middle
    transition 0.2s
    box-shadow 1px 2px 3px 1px rgba(0,0,0,0.2)
    @media screen and (max-width: 500px)
      margin 0 5px 0 5px
      line-height 40px
      height 40px
      width 70px
    @media screen and (min-width: 500px)
      line-height 50px
      height 50px
      width 110px
      margin-bottom 30px
    &:hover
      box-shadow 4px 8px 16px 4px rgba(0,0,0,0.2)
      border 1.5px solid primary-color
      animation-name none
    &:active
      box-shadow 1px 1px 11px 1px rgba(0,0,0,0.2)
      border 2.5px solid primary-color
      animation-name none
    
    &-movable
      animation vertical 1s ease-in-out infinite alternate

      &_wrapper
        vertical-align middle
        animation horizontal 1s ease-in-out infinite alternate
        &:hover
          animation-name none

    &_selected
      color #fff
      border 1.5px solid primary-color
      background-color primary-color

  @keyframes horizontal
    from { transform:translateX(-3px); }
    to { transform:translateX(  0px); }

  @keyframes vertical
    from { transform:translateY(-10px); }
    to { transform:translateY(  0px); }
</style>