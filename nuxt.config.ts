// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  vite: {
    vue: {
      customElement: true
    },
  },

  modules: [
    // ...
    // '@pinia/nuxt',
  ],
  build: {
    postcss: {
      plugins: {
        'postcss-custom-properties': {},
        'postcss-preset-env': {
          autoprefixer: {
            flexbox: 'no-2009', // Use o autoprefixer, mas evite o sufixo flexbox para o IE 10
            grid: true,
          },
          stage: 3,
          features: {
            'custom-properties': false,
          },
        },
      },
    },
  },
})
