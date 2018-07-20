<template lang="pug">
  .blog_container
    .wrapper
      h2 「{{ tag }}」のタグ　{{ posts.length }}本
    ul
      li(class="item" v-for="post in posts" v-bind:key="post.fields.title")
        blog-card(:post="post")
</template>

<script>
import {createClient} from '~/plugins/contentful.js'
import BlogCard from '~/components/BlogCard.vue'

const client = createClient()

export default {
  transition: 'slide-left',
  asyncData ({ env, params }) {
    return client.getEntries({
      'content_type': env.CTF_BLOG_POST_TYPE_ID,
      'fields.tags[in]': params.tag,
      order: '-sys.createdAt'
    }).then(entries => {
      return {
        posts: entries.items,
        tag: params.tag
      }
    })
  },
  components: {
    BlogCard
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    text-align center
    margin-bottom 10px
    & > h2
      display inline-block
      border-bottom 1.5px solid primary-color
      padding-bottom 0.1em
</style>
