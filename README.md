# Vue + Webpack starter

Just some sandboxing to understand how to properly use webpack and to build something using vuejs.

## Some highlights

- Webpack 4.6 - https://webpack.js.org/concepts/
- Vuejs 2.5 - https://vuejs.org/v2/guide/

Webpack loaders

- vue-loader : handle vue files (template, style, script).
- style-loader / css-loader : handle css.
- babel-loader : ES6 to ES5.

Dev env

- webpack-dev-server (npm run ...)
- html-webpack-plugin (injects the bundled file into html or generates directly an html file)
- webpack.HotModuleReplacementPlugin (webpack config plugin)