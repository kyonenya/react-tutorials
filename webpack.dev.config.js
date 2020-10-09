const path = require('path');

// node.jsのエクスポート文でオブジェクトを出力
module.exports = {
//  mode: 'production',
  mode: 'development',
   entry: './src/index.tsx',
   output: {
     filename: 'bundle.js',
     // 絶対パス
     path: path.resolve(__dirname, 'dist'),
     // 相対パス
     publicPath: '/dist/'
   },
  module: {
     rules: [{
       // .tsxまたは.tsに対して、
       test: /\.tsx?$/,
       // ts-loaderを使う
       use: 'ts-loader',
    }]
   },
   // モジュールimport時に拡張子を省略するので、ファイル探索をwebpackに解決させる
   resolve: {
     // 拡張子がついていなかったら、左から順に調べていく
     extensions: ['.ts', '.tsx', '.js', '.jsx']
   },
   watchOptions: {
     ignored: /.*/
   }
}