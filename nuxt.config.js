const {getConfigForKeys} = require('./lib/config.js')
const ctfConfig = getConfigForKeys([
  'CTF_BLOG_POST_TYPE_ID',
  'CTF_TAG_LIST_TYPE_ID',
  'CTF_SPACE_ID',
  'CTF_CDA_ACCESS_TOKEN',
  'CTF_CMA_ACCESS_TOKEN',
])
const {createClient} = require('./plugins/contentful')
const cdaClient = createClient(ctfConfig)
const cmaContentful = require('contentful-management')
const cmaClient = cmaContentful.createClient({
  accessToken: ctfConfig.CTF_CMA_ACCESS_TOKEN
})
const {resolve} = require('path')

const config = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'thinkshake製作所',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'thinkShake製作所は仙台市を中心にフリーランスとして活動するエンジニア、髙橋翔太の個人企業です。' },
      { name: 'keywords', content: 'フリーランス,エンジニア,ポートフォリオ' },
      { property: 'og:type', content: 'website'},
      { property: 'og:title', content: 'thinkShake製作所'},
      { property: 'og:description', content: 'thinkShake製作所は仙台市を中心にフリーランスとして活動するエンジニア、髙橋翔太の個人企業です。' },
      { property: 'og:image', content: 'https://thinkshake.net/logo.png' },
      { property: 'og:url', content: 'https://thinkshake.net' },
      { property: 'og:site_name', content: 'thinkShake製作所'},
      { property: 'og:locale', content: 'ja_JP' },
      { property: 'fb:admins', content: 'fb:app_id' },
      { content: 'summary', name: 'twitter:card' },
      { content: '@twitter_acount', name: 'twitter:site' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: ['vue-scrollto']
  },

  plugins: [
    { src: '~plugins/contentful' },
    { src: '~plugins/vue-scrollto' },
    { src: '~plugins/windowState', ssr: false },
    { src: '~plugins/ga.js', ssr: false },
    { src: '~plugins/truncate.js', ssr: false }
  ],

  modules: [
    ['nuxt-stylus-resources-loader', resolve(__dirname, 'assets/stylus/**/*.styl')],
  ],
  css: [
    { src: '~/assets/css/font.css' }
  ],
  /*
  ** Get all blog posts from Contentful
  ** and generate the needed files upfront
  **
  ** Included:
  ** - blog posts
  ** - available blog post tags
  */
  generate: {
    routes () {
      return Promise.all([
        // get all blog posts
        cdaClient.getEntries({
          'content_type': ctfConfig.CTF_BLOG_POST_TYPE_ID
        }),
        // get the blog post content type
        cmaClient.getSpace(ctfConfig.CTF_SPACE_ID)
          .then(space => space.getContentType(ctfConfig.CTF_BLOG_POST_TYPE_ID))
      ])
      .then(([entries, postType]) => {
        return [
          // map entries to URLs
          ...entries.items.map(entry => `/blog/${entry.fields.slug}`),
          // map all possible tags to URLs
          ...postType.fields.find(field => field.id === 'tags').items.validations[0].in.map(tag => `/tags/${tag}`)
        ]
      })
    }
  },

    /*
  ** Define environment variables being available
  ** in generate and browser context
  */
  env: {
    CTF_SPACE_ID: ctfConfig.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: ctfConfig.CTF_CDA_ACCESS_TOKEN,
    CTF_BLOG_POST_TYPE_ID: ctfConfig.CTF_BLOG_POST_TYPE_ID,
    CTF_TAG_LIST_TYPE_ID: ctfConfig.CTF_TAG_LIST_TYPE_ID
  }
}

module.exports = config