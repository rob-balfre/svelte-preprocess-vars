# svelte-preprocess-vars

[Svelte preprocessor](https://svelte.technology/guide#preprocessing) to inject JS variables into component styles.

Takes:
```js
module.exports = {
  primaryColor: 'blue',
};
```

and converts:
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
const path = require('path');
const webpack = require('webpack');
const sveltePreprocessVars = require('svelte-preprocess-vars');

const variablesPath = path.resolve('shared-variables.js');

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
            preprocess: sveltePreprocessVars(variablesPath),
            externalDependencies: [variablesPath]  // ensures svelte-loader recompiles the components if the variables change
          }
        }
      }
    ]
  },
};
```

Webpack and svelte-loader won't watch these variables unless you include them in your 'externalDependencies' (see example above).
