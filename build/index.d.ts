/**
 * See https://v2.docusaurus.io/docs/lifecycle-apis if you need more help!
 */
import { Plugin, LoadContext } from "@docusaurus/types";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
export interface IDevServerOptions {
    id?: string;
    devServer?: DevServerConfiguration;
}
export default function myPlugin(context: LoadContext, options: IDevServerOptions): Plugin<void>;
//# sourceMappingURL=index.d.ts.map