var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
    },{
      test: /\.html$/,
      use: ['html-loader']
  }, {
    test: /\.(gif|png|jpe?g|svg|webp)$/i,
    use: [
        'file-loader',
        {
            loader: 'image-webpack-loader',
            options: {
                mozjpeg: {
                    progressive: true,
                    quality: 90
                },
                optipng: {
                    enabled: false,
                },
                pngquant: {
                    quality: [0.85, 0.999],
                    speed: 4
                },
                gifsicle: {
                    interlaced: false,
                },
                webp: {
                    quality: 90
                }
            }
        },
    ],
} ]
},
};