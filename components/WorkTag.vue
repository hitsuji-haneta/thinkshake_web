<template lang="pug">
  .tag
    img(:src="image" class="tag_image")
    p(class="tag_text") {{ text }}
</template>

<script>
export default {
  props: ['tag_key'],
  data() {
    return {
      text: this.tag_key,
      image: `/${this.tag_key}.png`,
    }
  }
}
</script>