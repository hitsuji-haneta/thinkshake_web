<template lang="pug">
  .blog_container
    .blogList
      h2 「{{ tag }}」の記事
    ul
      li(class="item" v-for="post in posts" v-bind:key="post.fields.title")
        blog-card(:post="post")
    .tagList
      h2 タグ一覧
      .tagList_wrapper
        div(v-for="tag in tagList" v-bind:key="tag.fields.name" class="tag")
          nuxt-link(v-bind:to="{ name: 'tags-tag', params: { tag: tag.fields.name }}")
            p(class="tag_text") {{ tag.fields.name }}
    .link-under
      nuxt-link(to="/") サイトTOP
      br
      nuxt-link(to="/blog") 全ての記事
</template>

<script>
import {createClient} from '~/plugins/contentful.js'
import BlogCard from '~/components/BlogCard.vue'

const client = createClient()

export default {
  transition: 'slide-left',
  async asyncData ({ env, params }) {
    const posts = await client.getEntries({
      'content_type': env.CTF_BLOG_POST_TYPE_ID,
      'fields.tags[in]': params.tag,
      order: '-fields.publishDate',
    }).then(entries => {
      return {
        posts: entries.items,
        tag: params.tag
      }
    })
    .catch(console.error)

    const tagList = await client.getEntries({
      'content_type': env.CTF_TAG_LIST_TYPE_ID,
      order: '-sys.createdAt'
    }).then(entries => {
      return {
        tagList: entries.items
      }
    })
    .catch(console.error)

    return Object.assign(posts, tagList)
  },
  components: {
    BlogCard
  }
}
</script>