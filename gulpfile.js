const gulp    = require('gulp'),
  path        = require('path'),
  gutil       = require('gulp-util'),
  del         = require('del'),
  webpack     = require('webpack'),
  config      = require('./config'),
  CopyWebpackPlugin = require('copy-webpack-plugin'),
  webpackConfig     = Object.create(require('./webpack.config.js')),
  WebpackDevServer  = require('webpack-dev-server')

//
gulp.task('copiar-public', () => {
  return gulp.src(['./app/static/**/*.*'])
    .pipe(gulp.dest('./dist/public/'))
})
//
gulp.task('copiar-conf', () => {
  return gulp.src(['./server/src/config/*.*'])
    .pipe(gulp.dest('./dist/server/config'))
})
//
gulp.task('limpar', () => {
  return del.sync(['./dist/**'])
})
//
gulp.task('copiar', gulp.parallel('limpar', 'copiar-public', 'copiar-conf'))
//
gulp.task('app-dev', (cb) => {
  const webpackConfig   = require('./webpack.config');
  const compiler        = require('webpack')(webpackConfig);
  webpackConfig.entry.unshift('webpack-dev-server/client?http://' + config().host + ':' + config().porta_cliente + '/', 'webpack/hot/dev-server');

  new WebpackDevServer(compiler, {
    publicPath: webpackConfig.output.publicPath,
    contentBase: path.join(__dirname, 'dist/public'),
    stats: {
      colors: true
    },
    hot: true,
    open: true,
    historyApiFallback: true,
    clientLogLevel: 'info',
    quiet: true
  }).listen(config().porta_cliente, config().host, function(err) {
    if (err) throw new gutil.PluginError('webpack-dev-server', err);
    gutil.log('> Iniciando aplicação em modo desenvolvimento...');
    gutil.log('[webpack-dev-server]', 'http://' + config().host + ':' + config().porta_cliente + '/webpack-dev-server/index.html');
  })
  cb()
})
//
gulp.task('monitorar-public', function(done) {
  gulp.watch(['app/static/*.*', 'app/static/**/*.*'], gulp.series('copiar-public'));
  done();
})
//
gulp.task('dev', gulp.series('copiar-public', 'app-dev', gulp.parallel('monitorar-public')))
