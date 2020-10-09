const express = require('express');
const app = express();

// webpack開発用サーバーを設定
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.dev.config.js');
const compiler = webpack(config);
const middleware = webpackMiddleware(compiler, {
  publicPath: config.output.publicPath,
  watchOptions: {
  ignored: /.*/
  }
});
app.use(middleware);

// ルートディレクトリを指定
const rootDir = __dirname;
app.use(express.static(rootDir));

// ローカルサーバーを起動
const port = process.env['WEB_APP_PORT'];
app.listen(port, () => {
  console.log(`listening... ${port}`);
});