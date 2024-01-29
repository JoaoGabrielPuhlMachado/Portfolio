export default defineNuxtConfig({
  devtools: { enabled: false },
  vite: {
    vue: {
      customElement: true
    },
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/jpg', sizes: '512x512', href: '/img/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '512x512', href: '/img/favicon.ico' },
      ],
    },
  },
  postcss: {
    plugins: {
      'postcss-custom-properties': {},
      'postcss-preset-env': {
        autoprefixer: {
          flexbox: 'no-2009',
          grid: true,
        },
        stage: 3,
        features: {
          'custom-properties': false,
        },
      },
    },
  },
})
