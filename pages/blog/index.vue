<template lang="pug">
  .blog_container
    .wrapper
      h2 記事一覧
    ul
      li(class="item" v-for="post in posts" v-bind:key="post.fields.title")
        blog-card(:post="post")
    .toTop
      nuxt-link(to="/") サイトTOP
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
      order: '-sys.createdAt'
    }).then(entries => {
      return {
        posts: entries.items
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

  .toTop
    text-align center
</style>