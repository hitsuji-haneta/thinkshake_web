<template lang="pug">
  .blog_container
    .blogList
      h2 「{{ tag }}」の記事
    ul
      li(class="item" v-for="post in posts" v-bind:key="post.fields.title")
        blog-card(:post="post")
    .link-under
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
      'fields.tags[in]': params.tag,
      order: '-fields.publishDate',
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