# @thibaudcolas/eslint-plugin-cookbook [![npm](https://img.shields.io/npm/v/@thibaudcolas/eslint-plugin-cookbook.svg)](https://www.npmjs.com/package/@thibaudcolas/eslint-plugin-cookbook) [![Build Status](https://travis-ci.com/thibaudcolas/eslint-plugin-cookbook.svg?branch=master)](https://travis-ci.com/thibaudcolas/eslint-plugin-cookbook)

> Shareable ESLint config, based on airbnb/javascript, bundled as a plugin.

## Why

We want shareable configs to have as low of an overhead as possible. Users shouldn't have to know exactly what plugins are required by the config, install them and manage their versions manually. This plugin contains a shareable config, with plugin dependencies automatically installed.

> See [https://github.com/eslint/eslint/issues/3458](https://github.com/eslint/eslint/issues/3458) for further discussion on this topic.

## Usage

Install stylelint and the config:

```sh
npm install --save-dev stylelint @thibaudcolas/eslint-plugin-cookbook
```

Then [configure ESLint to use this config](https://eslint.org/docs/user-guide/configuring#extending-configuration-files). As a `.eslintrc.js` in the root of your project:

```js
module.exports = {
  // https://github.com/thibaudcolas/eslint-plugin-cookbook
  extends: "plugin:@thibaudcolas/cookbook/recommended",
};
```

### With Prettier

This ESLint plugin comes with a built-in Prettier-compatible config. First, install Prettier:

```sh
npm install --save-dev prettier
```

Switch to the Prettier config:

```js
module.exports = {
  // https://github.com/thibaudcolas/eslint-plugin-cookbook
  extends: "plugin:@thibaudcolas/cookbook/prettier",
};
```

Then, to configure Prettier itself, create a `prettier.config.js` file in the root of your project with:

```js
// https://github.com/thibaudcolas/eslint-plugin-cookbook
module.exports = require("@thibaudcolas/eslint-plugin-cookbook/prettier.config");
```

### Overriding the rules

Should further customisation be required, rules coming from external plugins require the `@thibaudcolas/cookbook` prefix:

```diff
module.exports = {
  // https://github.com/thibaudcolas/eslint-plugin-cookbook
  extends: "plugin:@thibaudcolas/cookbook/recommended",
  rules: {
-    "react/react-in-jsx-scope": ["warn"],
+    "@thibaudcolas/cookbook/react/react-in-jsx-scope": ["warn"],
-    "import/prefer-default-export": ["warn"],
+    "@thibaudcolas/cookbook/import/prefer-default-export": ["warn"],
  },
};
```

### Related tools

To get the most out of this config, it is assumed that projects have the following tools set up:

- [Prettier](https://prettier.io/) for automated formatting of stylesheets.
- [Browserslist](https://github.com/browserslist/browserslist) for the definition of target browsers (along with [autoprefixer](https://github.com/postcss/autoprefixer) and [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env)).

<!-- Generated with: npm run build:docs -->
