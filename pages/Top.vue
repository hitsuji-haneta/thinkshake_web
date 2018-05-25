<template lang="pug">
  section#top
    img#logo(src="~/assets/logo.png" v-bind:class="{ img_active: isActive }")
</template>

<script>
export default {
  computed: {
    isActive() { 
      if (process.browser) {
        return this.$window.scrollY === 0
      } else {
        return false
      }
    }
  },
  mounted: function() {
    document.getElementById('logo').classList.add('img_opening')
  }
}
</script>

<style lang= "stylus" scoped>
  #top
    width 100%
    display flex
    justify-content top
    text-align center
    flex-direction column
    align-items center
    margin-bottom 300px

  img
    margin-bottom 300px
    @media screen and (max-width: 500px)
      margin-top 150px
      width 60%
    @media screen and (min-width: 500px)
      margin-top 250px
  .img_active
    animation horizontal 2s linear 1
    transform-origin 50% 50%
  .img_opening
    animation horizontal 2s linear 1s 1
    transform-origin 50% 50%
  
  @keyframes horizontal {
    10% { transform:translateX(0px) }
    13% { transform:translateX(-40px) }
    16% { transform:translateX(0px) }
    19% { transform:translateX(40px) }
    22% { transform:translateX(0px) }
    25% { transform:translateX(-40px) }
    28% { transform:translateX(0px) }
    31% { transform:translateX(40px) }
    34% { transform:translateX(0px) }
    100% { transform:translateX(0px) }
  }

</style>