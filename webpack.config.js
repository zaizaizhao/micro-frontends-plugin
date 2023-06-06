const {Configuration} = require("webpack");
const path = require("path");

/**
 * @type {Configuration} //配置智能提示
 */
const config = {
    entry:"./src/index.ts",
    mode:"production",
    output:{
        filename:"index.js",
        path:path.resolve(__dirname,"lib"),
        //!开发库时需要使用，导入规范
        library:"wujievue",
        libraryTarget:"umd",
        umdNamedDefine:true
    },
    externals:{
        vue:"vue",
        wujie:"wujie"
    },
    module:{
        rules:[
            {
                test:/\.ts$/,
                use:"swc-loader"
            }
        ]
    }
}

module.exports = config