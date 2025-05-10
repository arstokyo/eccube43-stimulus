const path = require('path');
const Encore = require('@symfony/webpack-encore');

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
  Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
  .setOutputPath('html/bundle/')
  .setPublicPath('/html/bundle')
  .addEntry('ars', './html/template/ars/assets/js/bundle.js')
  .addEntry('admin', './html/template/admin/assets/js/bundle.js')
  .addEntry('install', './html/template/install/assets/js/bundle.js')
  .enableSingleRuntimeChunk()
  .cleanupOutputBeforeBuild()
  .enableSourceMaps(true)
  .configureBabel(null)
  .addAliases({
    jquery: path.join(__dirname, 'node_modules', 'jquery')
  })
  .enableBuildNotifications()
  .enableVersioning(false)
  .addLoader({
    test: /\.css$/,
    use: [
      require('mini-css-extract-plugin').loader,
      'css-loader'
    ]
  })
  .addPlugin(new (require('mini-css-extract-plugin'))({
    filename: '[name].css'
  }))
  .addLoader({
    test: /\.(png|jpg|svg|gif|eot|woff|woff2|ttf)$/,
    use: ['url-loader']
  })
  .addLoader({
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
  })
  .autoProvidejQuery();

module.exports = Encore.getWebpackConfig();
