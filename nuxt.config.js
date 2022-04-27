export default {
  target: 'server',

  head: {
    title: 'boilerplate-nuxt',
    htmlAttrs: {
      lang: 'ko'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [],

  plugins: [],

  // components 자동 import 여부
  components: true,

  // modules 와 buildModules의 차이점
  // buildModules 는 개발 중에 또는 build를 실행하는 데만 필요하므로 프로덕션 번들에서 제외됩니다.
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api/module', // setup hook을 포함한 composition-api 기능을 사용할 수 있다.
  ],
  modules: [
    '@nuxtjs/axios',
  ],

  axios: {
    baseURL: '/',
  },

  build: {}
}
