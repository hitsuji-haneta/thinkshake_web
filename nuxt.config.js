module.exports = {
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
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/earlyaccess/roundedmplus1c.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Code+Pro' }
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
    { src: '~plugins/vue-scrollto' },
    { src: '~plugins/windowState', ssr: false },
    { src: '~plugins/ga.js', ssr: false }
  ]
}
