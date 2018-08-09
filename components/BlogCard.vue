<template lang="pug">
  article
    .card.card-square(v-bind:style="duration")
      nuxt-link(class="blogCard_imageWrapper" v-bind:to="{ name: 'blog-slug', params: { slug: post.fields.slug }}")
        img(class="blogCard_image"
          v-bind:src="post.fields.heroImage.fields.file.url"
          v-bind:srcset="`${post.fields.heroImage.fields.file.url}, ${post.fields.heroImage.fields.file.url}, ${post.fields.heroImage.fields.file.url}`")
      .card_content
        nuxt-link(:to="{ name: 'blog-slug', params: { slug: post.fields.slug, tags: post.fields.tags }}" class="card_texts linkWrapper")
          time(class="date") {{ ( new Date(post.fields.publishDate)).toLocaleDateString() }}
          h4(class="title") {{ post.fields.title | truncate(30) }}
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

  .blogCard_imageWrapper
    position relative
    width 300px
    height 150px
    display table-cell
    vertical-align middle
    text-align center

  .blogCard_image
    width auto
    height auto
    max-width 100%
    max-height 100%
    vertical-align middle

  .date
    font-size 1.0rem

  .title
    font-size 1.2rem

  .flex-column
    flex-direction column
</style>