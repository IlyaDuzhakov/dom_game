const path = require ('path')

module.exports = {
  entry: './src/index.js',
   output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: 'production',
    module: {
    rules: [
      {
        test: /\.css$/i, // регулярные выражения
        use: ["style-loader", "css-loader"],
      },
       {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
          {
      test: /\.(?:js|mjs|cjs)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          targets: "defaults",
          presets: [
            ['@babel/preset-env']
          ]
        }
      }
    }
    ],
  },
};

 