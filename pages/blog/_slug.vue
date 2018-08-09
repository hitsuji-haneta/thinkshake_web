<template lang="pug">
  section(class="slug_container")
    .headline
      time(class="date") {{ ( new Date(post.fields.publishDate)).toLocaleDateString() }}
      h1 {{ post.fields.title }}
      .slug_imageWrapper
        img(v-bind:src="post.fields.heroImage.fields.file.url"
          v-bind:srcset="`${post.fields.heroImage.fields.file.url}, ${post.fields.heroImage.fields.file.url}, ${post.fields.heroImage.fields.file.url}`")
      .card_tags
        div(v-for="tag in post.fields.tags" v-bind:key="tag" class="tag")
          nuxt-link(v-bind:to="{ name: 'tags-tag', params: { tag: tag }}")
            p(class="tag_text") {{ tag }}
    .copy
      vue-markdown {{post.fields.body}}
    
    .pager
      div(class="pager_wrapper pager_wrapper-left")
        nuxt-link(class="pager_text" v-if="post.fields.previousPost" v-bind:to="{ name: 'blog-slug', params: { slug: post.fields.previousPost.fields.slug }}") {{ post.fields.previousPost.fields.title }}
      div(class="pager_wrapper pager_wrapper-right")
        nuxt-link(class="pager_text" v-if="post.fields.nextPost" v-bind:to="{ name: 'blog-slug', params: { slug: post.fields.nextPost.fields.slug }}") {{ post.fields.nextPost.fields.title }}

    .blog_container
      .blogList
        h2 関連記事
      ul
        li(class="item" v-for="post in related" v-bind:key="post.fields.title")
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
import VueMarkdown from 'vue-markdown'
import {createClient} from '~/plugins/contentful.js'
import BlogCard from '~/components/BlogCard.vue'

const client = createClient()

export default {
  transition: 'slide-left',
  async asyncData ({ env, params }) {
    const main = await client.getEntries({
      'content_type': env.CTF_BLOG_POST_TYPE_ID,
      'fields.slug': params.slug,
      order: '-sys.createdAt'
    }).then(entries => {
      return {
        post: entries.items[0],
      }
    })
    .catch(console.error)

    let tagQuery = ''
    if (main.post.fields.tags) {
      tagQuery = main.post.fields.tags.reduce((previous, current) => {
          return `${previous},${current}`
      })
    }

    const related = await client.getEntries({
      'content_type': env.CTF_BLOG_POST_TYPE_ID,
      'fields.tags[in]': tagQuery,
      order: '-fields.publishDate',
      limit: 5
    }).then(entries => {
      return {
        related: entries.items.filter((item) => item.fields.slug !== params.slug),
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

    return Object.assign(main, related, tagList)
  },
  components: {
    VueMarkdown,
    BlogCard
  }
}
</script>

<style>
.slug_container {
  width: 100%;
  padding: 0 20px 0;
}
@media screen and (max-width: 500px) {
  .slug_container {
    font-size: 15px;
  }
}
.slug_imageWrapper {
  width: 100%;
  text-align: center;
}
.headline {
  padding: 3em 0 0;
}
.headline h1 {
  font-size: 2.3em;
}

.copy {
  padding-bottom: 3em;
}
.copy *:not(div) {
  margin: 2em 0 1em;
}
.copy h1 {
  font-size: 1.4em;
  border-bottom: 1.5px solid #3fafbe;
  padding-bottom: 0.1em;
  border-left: 7px solid #3fafbe;
  padding-left: 0.7em;
  font-weight: normal;
}
.copy h2 {
  font-size: 1.2em;
  border-left: 5px solid #3fafbe;
  border-radius: 4px;
  padding-left: 0.7em;
  font-weight: normal;
}
.copy h3 {
  font-size: 1em;
}
.copy p {
  font-size: 1em;
  line-height: 1.5em;
}
.copy pre {
  width: 100%;
  background-color: #235561;
  padding: 1em 2em 1em 2em;
  overflow-x: auto;
}
.copy code {
  color: white;
  font-family: 'Source Code Pro', monospace, "Source Sans Pro";
}
.copy p code {
  color: black;
  background-color: #dde6e7;
  padding: 0.1em 0.4em 0.1em;
  margin: 0.1em 0.2em 0.1em;
}
.copy ul {
  margin-left: 3em;
  list-style: disc;
}
.copy li {
  margin: 0;
}
.copy img {
  margin: 0 auto;
}

.pager {
  width: 100%;
  justify-content: space-between;
  margin-bottom: 5em;
  position: relative;
}
.pager::before {
  position: absolute;
  content: "≪";
  font-size: 2rem;
  left: 0px;
  top: 50%;
  margin-top: -1.5rem;
}
.pager::after {
  position: absolute;
  content: "≫";
  font-size: 2rem;
  right: 0px;
  top: 50%;
  margin-top: -1.5rem;
}
.pager_wrapper {
  display: table-cell;
  border-top: 0.5px solid #3a4749;
  border-bottom: 0.5px solid #3a4749;
  width: 50%;
  height: 100%;
  vertical-align: middle;
}
.pager_wrapper-left {
  border-right: 0.5px dotted #3a4749;
  padding: 1rem 1rem 1rem 2.5rem;
}
.pager_wrapper-right {
  border-left: 0.5px dotted #3a4749;
  padding: 1rem 2.5rem 1rem 1rem;
}
.pager_text {
  text-decoration: none;
}
</style>
