module.exports = [
  // Add support for native node modules
  {
    test: /\.node$/,
    use: 'node-loader',
  },
  {
    test: /\.(m?js|node)$/,
    parser: { amd: false },
    use: {
      loader: '@marshallofsound/webpack-asset-relocator-loader',
      options: {
        outputAssetBase: 'native_modules',
      },
    },
  },
  {
    test: /\.tsx?$/,
    exclude: /(node_modules|.webpack)/,
    loaders: [
      {
        loader: 'babel-loader'
      },
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      }]
  },
  {
    test: /\.(scss|css)$/,
    use: ["style-loader", "css-loader", "sass-loader"],
  },
  {
    test: /\.less$/,
    use: [{
      loader: 'style-loader',
    }, {
      loader: 'css-loader', // translates CSS into CommonJS
    }, {
      loader: 'less-loader', // compiles Less to CSS
      options: {
        lessOptions: { // If you are using less-loader@5 please spread the lessOptions to options directly
          modifyVars: {
            'primary-color': '#00b14f',
            'link-color': '#00b14f',
            'border-radius-base': '2px',
          },
          javascriptEnabled: true,
        },
      },
    }]
  }
];
