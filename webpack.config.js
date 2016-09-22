module.exports = {
     entry: './public/client.js',
     output: {
         path: './public/js',
         filename: 'bundle.min.js',
     },
     module: {
         loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             query: {
               presets : ['react','es2015'],
               plugins : ['transform-class-properties']
             }
         }]
     }
 }
