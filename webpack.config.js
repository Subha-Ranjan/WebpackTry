const path = require('path') 
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    //tell webpack abt entrypoint
    entry: './src/index.js',


    output:{
        path: path.join(__dirname,'/dist'),  //path.resolve() is also used
        filename: 'bundle.js'
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'

        })
    ],

    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env", "@babel/preset-react"],
              },
            },
          },
        ],
      },
      
      devServer:{
          port: 3010, // default 8000
    }

}