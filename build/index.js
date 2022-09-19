"use strict";
/**
 * See https://v2.docusaurus.io/docs/lifecycle-apis if you need more help!
 */
Object.defineProperty(exports, "__esModule", { value: true });
var defalutDevServerOption = {
    headers: [
        {
            key: "Access-Control-Allow-Origin",
            value: "*",
        },
        {
            key: "Access-Control-Allow-Headers",
            value: "content-type",
        },
        {
            key: "Access-Control-Allow-Methods",
            value: "DELETE,PUT,POST,GET,OPTIONS",
        },
    ],
};
function myPlugin(context, options) {
    return {
        // change this to something unique, or caches may conflict!
        name: "docusaurus-plugin-devServer-proxy",
        configureWebpack: function (config, isServer, utils) {
            if (isServer)
                return {};
            var devServer = options.devServer
                ? Object.assign({}, defalutDevServerOption, options.devServer)
                : Object.assign({}, defalutDevServerOption);
            return {
                devServer: devServer,
            };
        },
    };
}
exports.default = myPlugin;
//# sourceMappingURL=index.js.map