# docusaurus-plugin-devServer

```js
//docusaurus.config.js
{
  plugins: [
    [
      "docusaurus-plugin-devserver",
      {
        devServer: {
          proxy: {
            "/api": {
              target: "https://api.steampowered.com",
              pathRewrite: { "^/api": "" },
              changeOrigin: true,
            },
          },
        },
      },
    ],
  ]
}
```

# Install

## Yarn

```
yarn add docusaurus-plugin-devserver
```

## NPM

```
npm install --save docusaurus-plugin-devserver
```
