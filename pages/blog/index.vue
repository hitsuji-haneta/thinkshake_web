<template lang="pug">
  .blog_container
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