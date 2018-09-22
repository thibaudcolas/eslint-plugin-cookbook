# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html), enforced with [semantic-release](https://github.com/semantic-release/semantic-release).

## [4.0.1](https://github.com/thibaudcolas/eslint-plugin-cookbook/compare/v4.0.0...v4.0.1) (2018-09-22)

### Bug Fixes

- **release:** upgrade lodash transitive dependency to fix vulnerability ([5a19da2](https://github.com/thibaudcolas/eslint-plugin-cookbook/commit/5a19da2))

# [4.0.0](https://github.com/thibaudcolas/eslint-plugin-cookbook/compare/v3.0.3...v4.0.0) (2018-09-22)

### Features

- **config:** cleanup config rules ([b046648](https://github.com/thibaudcolas/eslint-plugin-cookbook/commit/b046648))
- **config:** export only the Prettier-compatible config ([b5473ce](https://github.com/thibaudcolas/eslint-plugin-cookbook/commit/b5473ce))
- **config:** remove Prettier plugin ([4d3574d](https://github.com/thibaudcolas/eslint-plugin-cookbook/commit/4d3574d))

### BREAKING CHANGES

- **config:** Updates how rules are configred in the config, generally to be stricter. Here are the detailed changes:

```diff
"import/no-extraneous-dependencies": Array [
  2,
  Object {
-     "devDependencies": true,
+     "devDependencies": Array [
+       "test/**",
+       "tests/**",
+       "spec/**",
+       "**/__tests__/**",
+       "**/__mocks__/**",
+       "test.{js,jsx}",
+       "test-*.{js,jsx}",
+       "**/*{.,_}{test,spec}.{js,jsx}",
+       "**/jest.config.js",
+       "**/vue.config.js",
+       "**/webpack.config.js",
+       "**/webpack.config.*.js",
+       "**/rollup.config.js",
+       "**/rollup.config.*.js",
+       "**/gulpfile.js",
+       "**/gulpfile.*.js",
+       "**/Gruntfile{,.js}",
+       "**/protractor.conf.js",
+       "**/protractor.conf.*.js",
+       "**/dangerfile.js",
+    ],
  },
],

- "import/prefer-default-export": "off",
+ "import/prefer-default-export": "error",

- "jsx-a11y/label-has-associated-control": "error",
+ "jsx-a11y/label-has-associated-control": "off",

- "react/jsx-boolean-value": "off",
+ "react/jsx-boolean-value": "error",

- "react/jsx-indent": "error",
+ "react/jsx-indent": "off",

- "react/jsx-indent-props": "error",
+ "react/jsx-indent-props": "off",

- "react/sort-comp": "off",
+ "react/sort-comp": "error",

- "arrow-body-style": "off",
+ "arrow-body-style": "error",

- "eol-last": "warn",
+ "eol-last": "off",

- "id-length": "off",
+ "id-length": "off",

- "indent": "error",
+ "indent": "off",

- "jsx-quotes": "warn"
+ "jsx-quotes": "off"

- "max-len": "warn"
+ "max-len": "off"

"no-console": Array [
    "warn",
-   Object {
-     "allow": Array [
-       "warn",
-       "error",
-       "time",
-       "timeEnd",
-     ],
-   },
],

- "no-new": "off"
+ "no-new": "error",

- "no-plusplus": "off"
+ "no-plusplus": "error",

"object-shorthand": Array [
    "error",
-   "methods",
+   "always",
+   Object {
+     "avoidQuotes": true,
+     "ignoreConstructors": false,
+   },
],
```

- **config:** now exports only the recommended config, Prettier-compatible. There is no reason to have separate config since it no longer mandates Prettier usage.
- **config:** Removed [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier), and its prettier/prettier rule from the config. Projects should have Prettier running without ESLint anyway so it also processes other file types. Running it within Prettier offers marginal improvements only, and has a performance drawback, as well as unnecessarily tying together formatting choices governed by Prettier and the ESLint config.

## [3.0.3](https://github.com/thibaudcolas/eslint-plugin-cookbook/compare/v3.0.2...v3.0.3) (2018-09-17)

### Bug Fixes

- **config:** remove option that does not serialise as JSON ([e85f0c5](https://github.com/thibaudcolas/eslint-plugin-cookbook/commit/e85f0c5))

## [3.0.2](https://github.com/thibaudcolas/eslint-plugin-cookbook/compare/v3.0.1...v3.0.2) (2018-09-17)

### Bug Fixes

- **config:** make import/no-cycle config serialisable to JSON ([5e06bbb](https://github.com/thibaudcolas/eslint-plugin-cookbook/commit/5e06bbb))

## [3.0.1](https://github.com/thibaudcolas/eslint-plugin-cookbook/compare/v3.0.0...v3.0.1) (2018-09-17)

### Bug Fixes

- **config:** fix exposed configs being invalid because of new attributes ([a6f46f7](https://github.com/thibaudcolas/eslint-plugin-cookbook/commit/a6f46f7))
- **release:** fix package.main pointing at the wrong file ([f896eac](https://github.com/thibaudcolas/eslint-plugin-cookbook/commit/f896eac))

# [3.0.0](https://github.com/thibaudcolas/stylelint-config-cookbook/tree/v3.0.0) (2018-09-16)

First release
