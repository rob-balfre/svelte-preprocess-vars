# svelte-preprocess-vars

[Svelte preprocessor](https://svelte.technology/guide#preprocessing) to inject JS variables into component styles.

Converts:
```html
<style>
  h1 {
    color: var(--primaryColor);
  }
</style>
```

to:
```html
<style>
  h1 {
    color: blue;
  }
</style>
```

Setup:

```bash
npm install svelte-preprocess-vars --save-dev
```

Example webpack svelte-loader config:

```js
const webpack = require('webpack');
const sveltePreprocessVars = require('svelte-preprocess-vars');

const variables = { 
  primaryColor: 'blue'
}

module.exports = {
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: {
          loader: 'svelte-loader',
          options: {
            hydratable: true,
            hotReload: true,
            preprocess: sveltePreprocessVars({variables})
          }
        }
      }
    ]
  },
};
```

Webpack and svelte-loader won't watch these variables for changes so make sure you restart your dev server when you update them (nodemon can come in handy here).
For example in your package.json:
```js
"dev": "nodemon --watch components/variables.js --exec sapper dev",
```
 