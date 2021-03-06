const path = require("path");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "release"),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    "presets": [
                        "es2015", "latest"
                    ]
                }
            }
            
        }]
    }
}