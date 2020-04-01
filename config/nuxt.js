'use strict'

const resolve = require('path').resolve

module.exports = {
  /*
  ** Headers of the page
  */
modules: [
  '@nuxtjs/axios',
],

axios: {
  // proxyHeaders: false
},

  head: {
    title: 'Full stack modern web development course for free',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Adonuxt project'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'favicon.ico'
      }
    ]
  },
  // plugins 

  plugins: ['~plugins/iview'],

  /*
  ** Global CSS
  */
  css: ['~assets/css/main.css', '~assets/css/app.css'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#744d82' },
  /*
  ** Point to resources
  */
  srcDir: resolve(__dirname, '..', 'resources')
}
