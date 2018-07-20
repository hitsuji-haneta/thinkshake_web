<template lang="pug">
  article
    .card.card-square(v-bind:style="duration")
      nuxt-link(:to="{ name: 'blog-slug', params: { slug: post.fields.slug }}")
        img(v-bind:src="post.fields.heroImage.fields.file.url + '?fit=scale&w=350&h=196'"
          v-bind:srcset="`${post.fields.heroImage.fields.file.url}?w=350&h=196&fit=fill 350w, ${post.fields.heroImage.fields.file.url}?w=1000&h=562&fit=fill 1000w, ${post.fields.heroImage.fields.file.url}?w=2000&h=1125&fit=fill 2000w`")
      .card_content
        nuxt-link(:to="{ name: 'blog-slug', params: { slug: post.fields.slug }}" class="card_texts linkWrapper")
          time(class="date") {{ ( new Date(post.fields.publishDate)).toDateString() }}
          h4 {{ post.fields.title }}
        .card_tags
          div(v-for="tag in post.fields.tags" v-bind:key="tag" class="tag")
            nuxt-link(v-bind:to="{ name: 'tags-tag', params: { tag: tag }}")
              p(class="tag_text") {{ tag }}
</template>

<script>
export default {
  props: ['post'],
  data() {
    return { 
      duration: `animation-duration: ${Math.random()+3}s`
    }
  }
}
</script>

<style lang="stylus" scoped>
  .linkWrapper
    display block
    height 120px
    color base-color
    text-decoration none

  .date
    font-size 1.0rem

  .flex-column
    flex-direction column
</style>