# @thibaudcolas/eslint-plugin-cookbook [![npm](https://img.shields.io/npm/v/@thibaudcolas/eslint-plugin-cookbook.svg)](https://www.npmjs.com/package/@thibaudcolas/eslint-plugin-cookbook) [![Build Status](https://travis-ci.com/thibaudcolas/eslint-plugin-cookbook.svg?branch=master)](https://travis-ci.com/thibaudcolas/eslint-plugin-cookbook)

> Shareable ESLint config, based on airbnb/javascript, bundled as a plugin.

## Why

We want shareable configs to have as low of an overhead as possible. Users shouldn't have to know exactly what plugins are required by the config, install them and manage their versions manually. This plugin contains a shareable config, with plugin dependencies automatically installed.

> See [https://github.com/eslint/eslint/issues/3458](https://github.com/eslint/eslint/issues/3458) for further discussion on this topic.

## Usage

Install ESLint and the config:

```sh
npm install --save-dev eslint @thibaudcolas/eslint-plugin-cookbook
```

Then [configure ESLint to use this config](https://eslint.org/docs/user-guide/configuring#extending-configuration-files). As a `.eslintrc.js` in the root of your project:

```js
module.exports = {
  // https://github.com/thibaudcolas/eslint-plugin-cookbook
  extends: "plugin:@thibaudcolas/cookbook/recommended",
};
```

### With Prettier

This recommended config is Prettier-compatible. First, install Prettier:

```sh
npm install --save-dev prettier
```

Then, to configure Prettier itself, create a `prettier.config.js` file in the root of your project. You can use the following to get started:

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

### Tips

- Use ESLint’s [`--report-unused-disable-directives`](https://eslint.org/docs/user-guide/command-line-interface#--report-unused-disable-directives) flag to ensure you do not use more `eslint-disable` comments than needed.

## Rules

### Cookbook config

- [no-warning-comments](https://eslint.org/docs/rules/no-warning-comments): `1, terms: todo, fixme, xxx, location: start`
- [import/no-extraneous-dependencies](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md): `2, devDependencies: test/**, tests/**, spec/**, **/__tests__…`
- [react/jsx-filename-extension](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md): `2, extensions: .js`
- [no-param-reassign](https://eslint.org/docs/rules/no-param-reassign): `2, props: false`
- [react/forbid-prop-types](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md): `2, forbid: any`

### Rules of [`eslint-config-airbnb`](https://github.com/airbnb/javascript)

<details>

- [array-callback-return](https://eslint.org/docs/rules/array-callback-return): `error, allowImplicit: true`
- [block-scoped-var](https://eslint.org/docs/rules/block-scoped-var)
- [class-methods-use-this](https://eslint.org/docs/rules/class-methods-use-this): `error, exceptMethods: render, getInitialState, getDefaultPro…`
- [consistent-return](https://eslint.org/docs/rules/consistent-return)
- [default-case](https://eslint.org/docs/rules/default-case): `error, commentPattern: ^no default$`
- [dot-notation](https://eslint.org/docs/rules/dot-notation): `error, allowKeywords: true`
- [eqeqeq](https://eslint.org/docs/rules/eqeqeq): `error, always, null: ignore`
- [guard-for-in](https://eslint.org/docs/rules/guard-for-in)
- [no-alert](https://eslint.org/docs/rules/no-alert): `warn`
- [no-caller](https://eslint.org/docs/rules/no-caller)
- [no-case-declarations](https://eslint.org/docs/rules/no-case-declarations)
- [no-else-return](https://eslint.org/docs/rules/no-else-return): `error, allowElseIf: false`
- [no-empty-function](https://eslint.org/docs/rules/no-empty-function): `error, allow: arrowFunctions, functions, methods`
- [no-empty-pattern](https://eslint.org/docs/rules/no-empty-pattern)
- [no-eval](https://eslint.org/docs/rules/no-eval)
- [no-extend-native](https://eslint.org/docs/rules/no-extend-native)
- [no-extra-bind](https://eslint.org/docs/rules/no-extra-bind)
- [no-extra-label](https://eslint.org/docs/rules/no-extra-label)
- [no-fallthrough](https://eslint.org/docs/rules/no-fallthrough)
- [no-global-assign](https://eslint.org/docs/rules/no-global-assign): `error, exceptions:`
- [no-implied-eval](https://eslint.org/docs/rules/no-implied-eval)
- [no-iterator](https://eslint.org/docs/rules/no-iterator)
- [no-labels](https://eslint.org/docs/rules/no-labels): `error, allowLoop: false, allowSwitch: false`
- [no-lone-blocks](https://eslint.org/docs/rules/no-lone-blocks)
- [no-loop-func](https://eslint.org/docs/rules/no-loop-func)
- [no-multi-str](https://eslint.org/docs/rules/no-multi-str)
- [no-new](https://eslint.org/docs/rules/no-new)
- [no-new-func](https://eslint.org/docs/rules/no-new-func)
- [no-new-wrappers](https://eslint.org/docs/rules/no-new-wrappers)
- [no-octal](https://eslint.org/docs/rules/no-octal)
- [no-octal-escape](https://eslint.org/docs/rules/no-octal-escape)
- [no-proto](https://eslint.org/docs/rules/no-proto)
- [no-redeclare](https://eslint.org/docs/rules/no-redeclare)
- [no-restricted-properties](https://eslint.org/docs/rules/no-restricted-properties): `error, object: arguments, property: callee, message: argumen…`
- [no-return-assign](https://eslint.org/docs/rules/no-return-assign): `error, always`
- [no-return-await](https://eslint.org/docs/rules/no-return-await)
- [no-script-url](https://eslint.org/docs/rules/no-script-url)
- [no-self-assign](https://eslint.org/docs/rules/no-self-assign): `error, props: false`
- [no-self-compare](https://eslint.org/docs/rules/no-self-compare)
- [no-sequences](https://eslint.org/docs/rules/no-sequences)
- [no-throw-literal](https://eslint.org/docs/rules/no-throw-literal)
- [no-unused-expressions](https://eslint.org/docs/rules/no-unused-expressions): `error, allowShortCircuit: false, allowTernary: false, allowT…`
- [no-unused-labels](https://eslint.org/docs/rules/no-unused-labels)
- [no-useless-concat](https://eslint.org/docs/rules/no-useless-concat)
- [no-useless-escape](https://eslint.org/docs/rules/no-useless-escape)
- [no-useless-return](https://eslint.org/docs/rules/no-useless-return)
- [no-void](https://eslint.org/docs/rules/no-void)
- [no-with](https://eslint.org/docs/rules/no-with)
- [prefer-promise-reject-errors](https://eslint.org/docs/rules/prefer-promise-reject-errors): `error, allowEmptyReject: true`
- [radix](https://eslint.org/docs/rules/radix)
- [vars-on-top](https://eslint.org/docs/rules/vars-on-top)
- [yoda](https://eslint.org/docs/rules/yoda)
- [for-direction](https://eslint.org/docs/rules/for-direction)
- [getter-return](https://eslint.org/docs/rules/getter-return): `error, allowImplicit: true`
- [no-await-in-loop](https://eslint.org/docs/rules/no-await-in-loop)
- [no-compare-neg-zero](https://eslint.org/docs/rules/no-compare-neg-zero)
- [no-cond-assign](https://eslint.org/docs/rules/no-cond-assign): `error, always`
- [no-console](https://eslint.org/docs/rules/no-console): `warn`
- [no-constant-condition](https://eslint.org/docs/rules/no-constant-condition): `warn`
- [no-control-regex](https://eslint.org/docs/rules/no-control-regex)
- [no-debugger](https://eslint.org/docs/rules/no-debugger)
- [no-dupe-args](https://eslint.org/docs/rules/no-dupe-args)
- [no-dupe-keys](https://eslint.org/docs/rules/no-dupe-keys)
- [no-duplicate-case](https://eslint.org/docs/rules/no-duplicate-case)
- [no-empty](https://eslint.org/docs/rules/no-empty)
- [no-empty-character-class](https://eslint.org/docs/rules/no-empty-character-class)
- [no-ex-assign](https://eslint.org/docs/rules/no-ex-assign)
- [no-extra-boolean-cast](https://eslint.org/docs/rules/no-extra-boolean-cast)
- [no-func-assign](https://eslint.org/docs/rules/no-func-assign)
- [no-inner-declarations](https://eslint.org/docs/rules/no-inner-declarations)
- [no-invalid-regexp](https://eslint.org/docs/rules/no-invalid-regexp)
- [no-irregular-whitespace](https://eslint.org/docs/rules/no-irregular-whitespace)
- [no-obj-calls](https://eslint.org/docs/rules/no-obj-calls)
- [no-prototype-builtins](https://eslint.org/docs/rules/no-prototype-builtins)
- [no-regex-spaces](https://eslint.org/docs/rules/no-regex-spaces)
- [no-sparse-arrays](https://eslint.org/docs/rules/no-sparse-arrays)
- [no-template-curly-in-string](https://eslint.org/docs/rules/no-template-curly-in-string)
- [no-unreachable](https://eslint.org/docs/rules/no-unreachable)
- [no-unsafe-finally](https://eslint.org/docs/rules/no-unsafe-finally)
- [no-unsafe-negation](https://eslint.org/docs/rules/no-unsafe-negation)
- [use-isnan](https://eslint.org/docs/rules/use-isnan)
- [valid-typeof](https://eslint.org/docs/rules/valid-typeof): `error, requireStringLiterals: true`
- [global-require](https://eslint.org/docs/rules/global-require)
- [no-buffer-constructor](https://eslint.org/docs/rules/no-buffer-constructor)
- [no-new-require](https://eslint.org/docs/rules/no-new-require)
- [no-path-concat](https://eslint.org/docs/rules/no-path-concat)
- [camelcase](https://eslint.org/docs/rules/camelcase): `error, properties: never`
- [func-names](https://eslint.org/docs/rules/func-names): `warn`
- [linebreak-style](https://eslint.org/docs/rules/linebreak-style): `error, unix`
- [lines-between-class-members](https://eslint.org/docs/rules/lines-between-class-members): `error, always, exceptAfterSingleLine: false`
- [lines-around-directive](https://eslint.org/docs/rules/lines-around-directive): `error, before: always, after: always`
- [new-cap](https://eslint.org/docs/rules/new-cap): `error, newIsCap: true, newIsCapExceptions: , capIsNew: false…`
- [no-array-constructor](https://eslint.org/docs/rules/no-array-constructor)
- [no-bitwise](https://eslint.org/docs/rules/no-bitwise)
- [no-continue](https://eslint.org/docs/rules/no-continue)
- [no-lonely-if](https://eslint.org/docs/rules/no-lonely-if)
- [no-multi-assign](https://eslint.org/docs/rules/no-multi-assign)
- [no-nested-ternary](https://eslint.org/docs/rules/no-nested-ternary)
- [no-new-object](https://eslint.org/docs/rules/no-new-object)
- [no-plusplus](https://eslint.org/docs/rules/no-plusplus)
- [no-restricted-syntax](https://eslint.org/docs/rules/no-restricted-syntax): `error, selector: ForInStatement, message: for..in loops iter…`
- [no-underscore-dangle](https://eslint.org/docs/rules/no-underscore-dangle): `error, allow: , allowAfterThis: false, allowAfterSuper: fals…`
- [no-unneeded-ternary](https://eslint.org/docs/rules/no-unneeded-ternary): `error, defaultAssignment: false`
- [one-var](https://eslint.org/docs/rules/one-var): `error, never`
- [operator-assignment](https://eslint.org/docs/rules/operator-assignment): `error, always`
- [spaced-comment](https://eslint.org/docs/rules/spaced-comment): `error, always, line: exceptions: -, +, markers: =, !, block:…`
- [no-delete-var](https://eslint.org/docs/rules/no-delete-var)
- [no-label-var](https://eslint.org/docs/rules/no-label-var)
- [no-restricted-globals](https://eslint.org/docs/rules/no-restricted-globals): `error, isFinite, isNaN, addEventListener, blur, close, close…`
- [no-shadow](https://eslint.org/docs/rules/no-shadow)
- [no-shadow-restricted-names](https://eslint.org/docs/rules/no-shadow-restricted-names)
- [no-undef](https://eslint.org/docs/rules/no-undef)
- [no-undef-init](https://eslint.org/docs/rules/no-undef-init)
- [no-unused-vars](https://eslint.org/docs/rules/no-unused-vars): `error, vars: all, args: after-used, ignoreRestSiblings: true`
- [no-use-before-define](https://eslint.org/docs/rules/no-use-before-define): `error, functions: true, classes: true, variables: true`
- [arrow-body-style](https://eslint.org/docs/rules/arrow-body-style): `error, as-needed, requireReturnForObjectLiteral: false`
- [constructor-super](https://eslint.org/docs/rules/constructor-super)
- [no-class-assign](https://eslint.org/docs/rules/no-class-assign)
- [no-const-assign](https://eslint.org/docs/rules/no-const-assign)
- [no-dupe-class-members](https://eslint.org/docs/rules/no-dupe-class-members)
- [no-new-symbol](https://eslint.org/docs/rules/no-new-symbol)
- [no-this-before-super](https://eslint.org/docs/rules/no-this-before-super)
- [no-useless-computed-key](https://eslint.org/docs/rules/no-useless-computed-key)
- [no-useless-constructor](https://eslint.org/docs/rules/no-useless-constructor)
- [no-useless-rename](https://eslint.org/docs/rules/no-useless-rename): `error, ignoreDestructuring: false, ignoreImport: false, igno…`
- [no-var](https://eslint.org/docs/rules/no-var)
- [object-shorthand](https://eslint.org/docs/rules/object-shorthand): `error, always, ignoreConstructors: false, avoidQuotes: true`
- [prefer-arrow-callback](https://eslint.org/docs/rules/prefer-arrow-callback): `error, allowNamedFunctions: false, allowUnboundThis: true`
- [prefer-const](https://eslint.org/docs/rules/prefer-const): `error, destructuring: any, ignoreReadBeforeAssign: true`
- [prefer-destructuring](https://eslint.org/docs/rules/prefer-destructuring): `error, VariableDeclarator: array: false, object: true, Assig…`
- [prefer-numeric-literals](https://eslint.org/docs/rules/prefer-numeric-literals)
- [prefer-rest-params](https://eslint.org/docs/rules/prefer-rest-params)
- [prefer-spread](https://eslint.org/docs/rules/prefer-spread)
- [prefer-template](https://eslint.org/docs/rules/prefer-template)
- [require-yield](https://eslint.org/docs/rules/require-yield)
- [symbol-description](https://eslint.org/docs/rules/symbol-description)
- [import/no-unresolved](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md): `error, commonjs: true, caseSensitive: true`
- [import/named](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md)
- [import/export](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md)
- [import/no-named-as-default](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md)
- [import/no-named-as-default-member](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md)
- [import/no-mutable-exports](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md)
- [import/no-amd](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md)
- [import/first](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md)
- [import/no-duplicates](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md)
- [import/extensions](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md): `error, ignorePackages, js: never, mjs: never, jsx: never`
- [import/order](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md): `error, groups: builtin, external, internal`
- [import/newline-after-import](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md)
- [import/prefer-default-export](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md)
- [import/no-absolute-path](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md)
- [import/no-dynamic-require](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md)
- [import/no-webpack-loader-syntax](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md)
- [import/no-named-default](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-default.md)
- [import/no-self-import](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-self-import.md)
- [import/no-cycle](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-cycle.md)
- [import/no-useless-path-segments](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-useless-path-segments.md)
- [strict](https://eslint.org/docs/rules/strict): `error, never`
- [react/jsx-boolean-value](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md): `error, never, always:`
- [react/jsx-no-duplicate-props](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md): `error, ignoreCase: true`
- [react/jsx-no-undef](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md)
- [react/jsx-pascal-case](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md): `error, allowAllCaps: true, ignore:`
- [react/jsx-uses-react](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md)
- [react/jsx-uses-vars](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md)
- [react/no-danger](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md): `warn`
- [react/no-deprecated](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md)
- [react/no-did-update-set-state](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md)
- [react/no-will-update-set-state](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md)
- [react/no-is-mounted](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md)
- [react/no-multi-comp](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md): `error, ignoreStateless: true`
- [react/no-string-refs](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md)
- [react/no-unknown-property](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md)
- [react/prefer-es6-class](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md): `error, always`
- [react/prefer-stateless-function](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md): `error, ignorePureComponents: true`
- [react/prop-types](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md): `error, ignore: , customValidators: , skipUndeclared: false`
- [react/react-in-jsx-scope](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md)
- [react/require-render-return](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md)
- [react/self-closing-comp](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md)
- [react/sort-comp](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md): `error, order: static-methods, instance-variables, lifecycle,…`
- [react/jsx-no-target-blank](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md): `error, enforceDynamicLinks: always`
- [react/jsx-no-comment-textnodes](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md)
- [react/no-render-return-value](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md)
- [react/no-find-dom-node](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md)
- [react/no-danger-with-children](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md)
- [react/no-unused-prop-types](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md): `error, customValidators: , skipShapeProps: true`
- [react/style-prop-object](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md)
- [react/no-unescaped-entities](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md)
- [react/no-children-prop](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md)
- [react/no-array-index-key](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md)
- [react/require-default-props](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md): `error, forbidDefaultForRequired: true`
- [react/forbid-foreign-prop-types](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md): `warn, allowInPropTypes: true`
- [react/void-dom-elements-no-children](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md)
- [react/default-props-match-prop-types](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md): `error, allowRequiredDefaults: false`
- [react/no-redundant-should-component-update](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md)
- [react/no-unused-state](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md)
- [react/no-typos](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-typos.md)
- [react/jsx-curly-brace-presence](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md): `error, props: never, children: never`
- [react/destructuring-assignment](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md): `error, always`
- [react/no-access-state-in-setstate](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md)
- [react/button-has-type](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md): `error, button: true, submit: true, reset: false`
- [react/no-this-in-sfc](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md)
- [jsx-a11y/anchor-has-content](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-has-content.md): `error, components:`
- [jsx-a11y/aria-role](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md): `error, ignoreNonDom: false`
- [jsx-a11y/aria-props](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-props.md)
- [jsx-a11y/aria-proptypes](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-proptypes.md)
- [jsx-a11y/aria-unsupported-elements](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-unsupported-elements.md)
- [jsx-a11y/alt-text](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md): `error, elements: img, object, area, inputtype=\image\, img: …`
- [jsx-a11y/img-redundant-alt](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-redundant-alt.md)
- [jsx-a11y/mouse-events-have-key-events](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md)
- [jsx-a11y/no-access-key](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-access-key.md)
- [jsx-a11y/interactive-supports-focus](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/interactive-supports-focus.md)
- [jsx-a11y/role-has-required-aria-props](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-has-required-aria-props.md)
- [jsx-a11y/role-supports-aria-props](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-supports-aria-props.md)
- [jsx-a11y/tabindex-no-positive](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/tabindex-no-positive.md)
- [jsx-a11y/heading-has-content](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/heading-has-content.md): `error, components:`
- [jsx-a11y/html-has-lang](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/html-has-lang.md)
- [jsx-a11y/lang](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/lang.md)
- [jsx-a11y/no-distracting-elements](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-distracting-elements.md): `error, elements: marquee, blink`
- [jsx-a11y/scope](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/scope.md)
- [jsx-a11y/click-events-have-key-events](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/click-events-have-key-events.md)
- [jsx-a11y/no-static-element-interactions](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md): `error, handlers: onClick, onMouseDown, onMouseUp, onKeyPress…`
- [jsx-a11y/no-noninteractive-element-interactions](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-interactions.md): `error, handlers: onClick, onMouseDown, onMouseUp, onKeyPress…`
- [jsx-a11y/accessible-emoji](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/accessible-emoji.md)
- [jsx-a11y/aria-activedescendant-has-tabindex](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-activedescendant-has-tabindex.md)
- [jsx-a11y/iframe-has-title](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/iframe-has-title.md)
- [jsx-a11y/no-autofocus](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-autofocus.md): `error, ignoreNonDOM: true`
- [jsx-a11y/no-redundant-roles](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-redundant-roles.md)
- [jsx-a11y/media-has-caption](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/media-has-caption.md): `error, audio: , video: , track:`
- [jsx-a11y/no-interactive-element-to-noninteractive-role](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-interactive-element-to-noninteractive-role.md): `error, tr: none, presentation`
- [jsx-a11y/no-noninteractive-element-to-interactive-role](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-to-interactive-role.md): `error, ul: listbox, menu, menubar, radiogroup, tablist, tree…`
- [jsx-a11y/no-noninteractive-tabindex](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-tabindex.md): `error, tags: , roles: tabpanel`
- [jsx-a11y/anchor-is-valid](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md): `error, components: Link, specialLink: to, aspects: noHref, i…`

</details>

### Disabled rules

<details>

- [accessor-pairs](https://eslint.org/docs/rules/accessor-pairs)
- [complexity](https://eslint.org/docs/rules/complexity)
- [curly](https://eslint.org/docs/rules/curly)
- [dot-location](https://eslint.org/docs/rules/dot-location)
- [max-classes-per-file](https://eslint.org/docs/rules/max-classes-per-file)
- [no-div-regex](https://eslint.org/docs/rules/no-div-regex)
- [no-eq-null](https://eslint.org/docs/rules/no-eq-null)
- [no-floating-decimal](https://eslint.org/docs/rules/no-floating-decimal)
- [no-native-reassign](https://eslint.org/docs/rules/no-native-reassign)
- [no-implicit-coercion](https://eslint.org/docs/rules/no-implicit-coercion)
- [no-implicit-globals](https://eslint.org/docs/rules/no-implicit-globals)
- [no-invalid-this](https://eslint.org/docs/rules/no-invalid-this)
- [no-magic-numbers](https://eslint.org/docs/rules/no-magic-numbers)
- [no-multi-spaces](https://eslint.org/docs/rules/no-multi-spaces)
- [no-unmodified-loop-condition](https://eslint.org/docs/rules/no-unmodified-loop-condition)
- [no-useless-call](https://eslint.org/docs/rules/no-useless-call)
- [require-await](https://eslint.org/docs/rules/require-await)
- [require-unicode-regexp](https://eslint.org/docs/rules/require-unicode-regexp)
- [wrap-iife](https://eslint.org/docs/rules/wrap-iife)
- [no-async-promise-executor](https://eslint.org/docs/rules/no-async-promise-executor)
- [no-extra-parens](https://eslint.org/docs/rules/no-extra-parens)
- [no-extra-semi](https://eslint.org/docs/rules/no-extra-semi)
- [no-misleading-character-class](https://eslint.org/docs/rules/no-misleading-character-class)
- [no-unexpected-multiline](https://eslint.org/docs/rules/no-unexpected-multiline)
- [no-negated-in-lhs](https://eslint.org/docs/rules/no-negated-in-lhs)
- [require-atomic-updates](https://eslint.org/docs/rules/require-atomic-updates)
- [valid-jsdoc](https://eslint.org/docs/rules/valid-jsdoc)
- [callback-return](https://eslint.org/docs/rules/callback-return)
- [handle-callback-err](https://eslint.org/docs/rules/handle-callback-err)
- [no-mixed-requires](https://eslint.org/docs/rules/no-mixed-requires)
- [no-process-env](https://eslint.org/docs/rules/no-process-env)
- [no-process-exit](https://eslint.org/docs/rules/no-process-exit)
- [no-restricted-modules](https://eslint.org/docs/rules/no-restricted-modules)
- [no-sync](https://eslint.org/docs/rules/no-sync)
- [array-bracket-newline](https://eslint.org/docs/rules/array-bracket-newline)
- [array-element-newline](https://eslint.org/docs/rules/array-element-newline)
- [array-bracket-spacing](https://eslint.org/docs/rules/array-bracket-spacing)
- [block-spacing](https://eslint.org/docs/rules/block-spacing)
- [brace-style](https://eslint.org/docs/rules/brace-style)
- [capitalized-comments](https://eslint.org/docs/rules/capitalized-comments)
- [comma-dangle](https://eslint.org/docs/rules/comma-dangle)
- [comma-spacing](https://eslint.org/docs/rules/comma-spacing)
- [comma-style](https://eslint.org/docs/rules/comma-style)
- [computed-property-spacing](https://eslint.org/docs/rules/computed-property-spacing)
- [consistent-this](https://eslint.org/docs/rules/consistent-this)
- [eol-last](https://eslint.org/docs/rules/eol-last)
- [func-call-spacing](https://eslint.org/docs/rules/func-call-spacing)
- [func-name-matching](https://eslint.org/docs/rules/func-name-matching)
- [func-style](https://eslint.org/docs/rules/func-style)
- [function-paren-newline](https://eslint.org/docs/rules/function-paren-newline)
- [id-blacklist](https://eslint.org/docs/rules/id-blacklist)
- [id-length](https://eslint.org/docs/rules/id-length)
- [id-match](https://eslint.org/docs/rules/id-match)
- [implicit-arrow-linebreak](https://eslint.org/docs/rules/implicit-arrow-linebreak)
- [indent](https://eslint.org/docs/rules/indent)
- [jsx-quotes](https://eslint.org/docs/rules/jsx-quotes)
- [key-spacing](https://eslint.org/docs/rules/key-spacing)
- [keyword-spacing](https://eslint.org/docs/rules/keyword-spacing)
- [line-comment-position](https://eslint.org/docs/rules/line-comment-position)
- [lines-around-comment](https://eslint.org/docs/rules/lines-around-comment)
- [max-depth](https://eslint.org/docs/rules/max-depth)
- [max-len](https://eslint.org/docs/rules/max-len)
- [max-lines](https://eslint.org/docs/rules/max-lines)
- [max-lines-per-function](https://eslint.org/docs/rules/max-lines-per-function)
- [max-nested-callbacks](https://eslint.org/docs/rules/max-nested-callbacks)
- [max-params](https://eslint.org/docs/rules/max-params)
- [max-statements](https://eslint.org/docs/rules/max-statements)
- [max-statements-per-line](https://eslint.org/docs/rules/max-statements-per-line)
- [multiline-comment-style](https://eslint.org/docs/rules/multiline-comment-style)
- [multiline-ternary](https://eslint.org/docs/rules/multiline-ternary)
- [new-parens](https://eslint.org/docs/rules/new-parens)
- [newline-after-var](https://eslint.org/docs/rules/newline-after-var)
- [newline-before-return](https://eslint.org/docs/rules/newline-before-return)
- [newline-per-chained-call](https://eslint.org/docs/rules/newline-per-chained-call)
- [no-inline-comments](https://eslint.org/docs/rules/no-inline-comments)
- [no-mixed-operators](https://eslint.org/docs/rules/no-mixed-operators)
- [no-mixed-spaces-and-tabs](https://eslint.org/docs/rules/no-mixed-spaces-and-tabs)
- [no-multiple-empty-lines](https://eslint.org/docs/rules/no-multiple-empty-lines)
- [no-negated-condition](https://eslint.org/docs/rules/no-negated-condition)
- [no-spaced-func](https://eslint.org/docs/rules/no-spaced-func)
- [no-tabs](https://eslint.org/docs/rules/no-tabs)
- [no-ternary](https://eslint.org/docs/rules/no-ternary)
- [no-trailing-spaces](https://eslint.org/docs/rules/no-trailing-spaces)
- [no-whitespace-before-property](https://eslint.org/docs/rules/no-whitespace-before-property)
- [nonblock-statement-body-position](https://eslint.org/docs/rules/nonblock-statement-body-position)
- [object-curly-spacing](https://eslint.org/docs/rules/object-curly-spacing)
- [object-curly-newline](https://eslint.org/docs/rules/object-curly-newline)
- [object-property-newline](https://eslint.org/docs/rules/object-property-newline)
- [one-var-declaration-per-line](https://eslint.org/docs/rules/one-var-declaration-per-line)
- [operator-linebreak](https://eslint.org/docs/rules/operator-linebreak)
- [padded-blocks](https://eslint.org/docs/rules/padded-blocks)
- [padding-line-between-statements](https://eslint.org/docs/rules/padding-line-between-statements)
- [prefer-object-spread](https://eslint.org/docs/rules/prefer-object-spread)
- [quote-props](https://eslint.org/docs/rules/quote-props)
- [quotes](https://eslint.org/docs/rules/quotes)
- [require-jsdoc](https://eslint.org/docs/rules/require-jsdoc)
- [semi](https://eslint.org/docs/rules/semi)
- [semi-spacing](https://eslint.org/docs/rules/semi-spacing)
- [semi-style](https://eslint.org/docs/rules/semi-style)
- [sort-keys](https://eslint.org/docs/rules/sort-keys)
- [sort-vars](https://eslint.org/docs/rules/sort-vars)
- [space-before-blocks](https://eslint.org/docs/rules/space-before-blocks)
- [space-before-function-paren](https://eslint.org/docs/rules/space-before-function-paren)
- [space-in-parens](https://eslint.org/docs/rules/space-in-parens)
- [space-infix-ops](https://eslint.org/docs/rules/space-infix-ops)
- [space-unary-ops](https://eslint.org/docs/rules/space-unary-ops)
- [switch-colon-spacing](https://eslint.org/docs/rules/switch-colon-spacing)
- [template-tag-spacing](https://eslint.org/docs/rules/template-tag-spacing)
- [unicode-bom](https://eslint.org/docs/rules/unicode-bom)
- [wrap-regex](https://eslint.org/docs/rules/wrap-regex)
- [init-declarations](https://eslint.org/docs/rules/init-declarations)
- [no-catch-shadow](https://eslint.org/docs/rules/no-catch-shadow)
- [no-undefined](https://eslint.org/docs/rules/no-undefined)
- [arrow-parens](https://eslint.org/docs/rules/arrow-parens)
- [arrow-spacing](https://eslint.org/docs/rules/arrow-spacing)
- [generator-star-spacing](https://eslint.org/docs/rules/generator-star-spacing)
- [no-confusing-arrow](https://eslint.org/docs/rules/no-confusing-arrow)
- [no-duplicate-imports](https://eslint.org/docs/rules/no-duplicate-imports)
- [no-restricted-imports](https://eslint.org/docs/rules/no-restricted-imports)
- [prefer-reflect](https://eslint.org/docs/rules/prefer-reflect)
- [rest-spread-spacing](https://eslint.org/docs/rules/rest-spread-spacing)
- [sort-imports](https://eslint.org/docs/rules/sort-imports)
- [template-curly-spacing](https://eslint.org/docs/rules/template-curly-spacing)
- [yield-star-spacing](https://eslint.org/docs/rules/yield-star-spacing)
- [import/default](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md)
- [import/namespace](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md)
- [import/no-deprecated](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md)
- [import/no-commonjs](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md)
- [import/no-nodejs-modules](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-nodejs-modules.md)
- [import/imports-first](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/imports-first.md)
- [import/no-namespace](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-namespace.md)
- [import/no-restricted-paths](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-restricted-paths.md)
- [import/max-dependencies](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/max-dependencies.md)
- [import/no-internal-modules](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-internal-modules.md)
- [import/unambiguous](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/unambiguous.md)
- [import/no-unassigned-import](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unassigned-import.md)
- [import/no-anonymous-default-export](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-anonymous-default-export.md)
- [import/exports-last](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/exports-last.md)
- [import/group-exports](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/group-exports.md)
- [import/no-default-export](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-default-export.md)
- [import/dynamic-import-chunkname](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/dynamic-import-chunkname.md)
- [import/no-relative-parent-imports](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-relative-parent-imports.md)
- [react/display-name](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md)
- [react/forbid-dom-props](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md)
- [react/jsx-closing-bracket-location](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md)
- [react/jsx-closing-tag-location](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md)
- [react/jsx-curly-spacing](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md)
- [react/jsx-handler-names](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md)
- [react/jsx-indent-props](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md)
- [react/jsx-key](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md)
- [react/jsx-max-props-per-line](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md)
- [react/jsx-no-bind](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
- [react/jsx-no-literals](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md)
- [react/sort-prop-types](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md)
- [react/jsx-sort-prop-types](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-prop-types.md)
- [react/jsx-sort-props](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md)
- [react/jsx-sort-default-props](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-default-props.md)
- [react/no-did-mount-set-state](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md)
- [react/no-direct-mutation-state](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md)
- [react/no-set-state](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md)
- [react/jsx-wrap-multilines](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md)
- [react/jsx-first-prop-new-line](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md)
- [react/jsx-equals-spacing](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md)
- [react/jsx-indent](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md)
- [react/require-optimization](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-optimization.md)
- [react/forbid-component-props](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md)
- [react/forbid-elements](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md)
- [react/jsx-tag-spacing](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md)
- [react/jsx-space-before-closing](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md)
- [react/boolean-prop-naming](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md)
- [react/jsx-one-expression-per-line](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md)
- [react/jsx-child-element-spacing](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-child-element-spacing.md)
- [react/jsx-max-depth](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-depth.md)
- [react/jsx-props-no-multi-spaces](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md)
- [react/no-unsafe](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md)
- [jsx-a11y/label-has-for](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md)
- [jsx-a11y/label-has-associated-control](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md)
- [jsx-a11y/no-onchange](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-onchange.md)
- [generator-star](https://eslint.org/docs/rules/generator-star)
- [indent-legacy](https://eslint.org/docs/rules/indent-legacy)
- [no-arrow-condition](https://eslint.org/docs/rules/no-arrow-condition)
- [no-comma-dangle](https://eslint.org/docs/rules/no-comma-dangle)
- [no-reserved-keys](https://eslint.org/docs/rules/no-reserved-keys)
- [no-space-before-semi](https://eslint.org/docs/rules/no-space-before-semi)
- [no-wrap-func](https://eslint.org/docs/rules/no-wrap-func)
- [space-after-function-name](https://eslint.org/docs/rules/space-after-function-name)
- [space-after-keywords](https://eslint.org/docs/rules/space-after-keywords)
- [space-before-function-parentheses](https://eslint.org/docs/rules/space-before-function-parentheses)
- [space-before-keywords](https://eslint.org/docs/rules/space-before-keywords)
- [space-in-brackets](https://eslint.org/docs/rules/space-in-brackets)
- [space-return-throw-case](https://eslint.org/docs/rules/space-return-throw-case)
- [space-unary-word-ops](https://eslint.org/docs/rules/space-unary-word-ops)
- [flowtype/boolean-style](https://github.com/gajus/eslint-plugin-flowtype#boolean-style)
- [flowtype/delimiter-dangle](https://github.com/gajus/eslint-plugin-flowtype#delimiter-dangle)
- [flowtype/generic-spacing](https://github.com/gajus/eslint-plugin-flowtype#generic-spacing)
- [flowtype/object-type-delimiter](https://github.com/gajus/eslint-plugin-flowtype#object-type-delimiter)
- [flowtype/semi](https://github.com/gajus/eslint-plugin-flowtype#semi)
- [flowtype/space-after-type-colon](https://github.com/gajus/eslint-plugin-flowtype#space-after-type-colon)
- [flowtype/space-before-generic-bracket](https://github.com/gajus/eslint-plugin-flowtype#space-before-generic-bracket)
- [flowtype/space-before-type-colon](https://github.com/gajus/eslint-plugin-flowtype#space-before-type-colon)
- [flowtype/union-intersection-spacing](https://github.com/gajus/eslint-plugin-flowtype#union-intersection-spacing)

</details>
