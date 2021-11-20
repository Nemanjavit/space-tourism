const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');

// const extractPLugin=new MiniCssExtractPlugin({
//     filename:'main',
// })

module.exports={
    entry:'./src/index.js',
    output:{
        path:path.join(__dirname,'/dist'),
        filename:'bundle.js',
    },
    devServer:{
        port:8080,
        historyApiFallback: true,
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/nodeModules/,
                use:{
                    loader:'babel-loader'
                }
            },
            {
                test:/\.s[ac]ss$/i,
                use:[MiniCssExtractPlugin.loader,'css-loader','sass-loader']
            }
        ]
    },
    plugins:[new HtmlWebpackPlugin({template:'./src/index.html'}),new MiniCssExtractPlugin()]
}