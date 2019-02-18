const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    devtool: 'source-map',
    entry: "./src/index.jsx",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react']
                }
            }
        }, 
        {
            test: /\.(css|scss)$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader', 'sass-loader']
          },
          {
            test: /\.css$/,
            loader: 'style-loader!css-loader?modules',
            include: /flexboxgrid/
          },
        {
            test: /\.(png|jpg|gif)$/,
            use: [
                {
                    loader: 'url-loader',
                }
            ]
        }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.png']
    },
    plugins: [
        new HtmlWebPackPlugin({
            hash: true,
            filename: "index.html",  //target html
            template: "./src/index.html" //source html
        }),
        new ExtractTextPlugin({ filename: 'css/style.scss' })
    ]
}
