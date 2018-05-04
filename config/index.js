'use strict'

const path = require('path')
const bd = require('./config')

module.exports = function() {
  let config;

  if (process.env.NODE_ENV === 'pro' || process.env.NODE_ENV === 'production') {
    config =
    {
      env: {NODE_ENV: JSON.stringify('production')},
      host: '',
      porta_servidor: 3000,
      porta_cliente: 80,
      index: path.resolve(__dirname, 'dist/public/view/index.html'),
      rootDir: path.resolve(__dirname, 'dist/public'),
      publicDir: 'dist/public',
      bd: bd.pro
    }
  } else {
    config =
    {
      env: {NODE_ENV: JSON.stringify('development')},
      porta_servidor: 3333,
      host: 'localhost',
      porta_cliente: 3000,
      abriNavegador: true,
      rootDir: path.resolve(__dirname, 'dist/public'),
      publicDir: '/',
      bd: bd.dev
    }
  }

  return config;
}
