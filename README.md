# Vue + Webpack starter

Just some sandboxing to understand how to properly use webpack and to build something using vuejs.

## Some highlights

- Webpack 4.6 - https://webpack.js.org/concepts/
- Vuejs 2.5 - https://vuejs.org/v2/guide/

### Webpack loaders

- vue-loader : handle vue files (template, style, script).
- style-loader / css-loader : handle css.
- babel-loader : ES6 to ES5.

### Dev env

- webpack-dev-server (npm run ...)
- html-webpack-plugin (injects the bundled file into html or generates directly an html file)
- webpack.HotModuleReplacementPlugin (webpack config plugin)

### Linting (js)

#### Getting feedback from a npm script command.

```npm
npm install --save-dev eslint eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard eslint-config-standard babel-eslint eslint-loader eslint-plugin-vue
```

.eslintrc.js

```javascript
module.exports = {
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/recommended',
    'standard'
  ],
  plugins: [
    'vue'
  ]
}
```

package.json

```scripts section
"lint": "eslint --ext .js,.vue src"
"lint:fix": "eslint --ext .js,.vue src --fix"
```

#### Run lint on webpack build

```npm
npm install --save-dev eslint-loader
```

webpack.config.js

```javascript
{
  test: /\.(js|vue)$/,
  use: 'eslint-loader',
  enforce: 'pre'
}
```
