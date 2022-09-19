/**
 * See https://v2.docusaurus.io/docs/lifecycle-apis if you need more help!
 */

import { Plugin, LoadContext } from "@docusaurus/types"
import webpack from "webpack"
import type { Configuration as DevServerConfiguration } from "webpack-dev-server"

const defalutDevServerOption: DevServerConfiguration = {
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
}
export default function myPlugin(
  context: LoadContext,
  options: DevServerConfiguration
): Plugin<void> {
  return {
    // change this to something unique, or caches may conflict!
    name: "docusaurus-plugin-devServer-proxy",
    configureWebpack(config, isServer, utils) {
      if (isServer) return {}

      const devServer = Object.assign({}, defalutDevServerOption, options)
      return <webpack.Configuration>{
        devServer,
      }
    },
  }
}
