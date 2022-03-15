const path = require("path");
const webpack = require("webpack")

module.exports = {
    entry:"./src/index.js",
    mode:"development",
    output:{
        path:path.resolve(__dirname, 'dist/'),
        publicPath:'/dist/',
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                loader:"babel-loader",
                options:{presets:["@babel/preset-env", "@babel/preset-react"]}
            },
            {
                test:/\.css$/,
                use:["style-loader", "css-loader"]
            },
            {
                test:/\.(svg|png|jpg|jpeg)$/,
                use:["file-loader"]
            }
        ]
    },
    resolve:{
        extensions:["*", ".js", "jsx"]
    },
    devServer:{
        port:4000,
        host:"localhost"
    },
    plugins:[new webpack.HotModuleReplacementPlugin()]
}