# eslint-plugin-springload [![npm](https://img.shields.io/npm/v/eslint-plugin-springload.svg?style=flat-square)](https://www.npmjs.com/package/eslint-plugin-springload) [![Build Status](https://travis-ci.org/springload/eslint-plugin-springload.svg?branch=master)](https://travis-ci.org/springload/eslint-plugin-springload)

> Springload's ESLint shareable configurations, as a plugin.

## Why

We want shareable configs to have as low of an overhead as possible. Users shouldn't have to know exactly what plugins are required by the config, install them and manage their versions manually. This plugin exposes [`eslint-config-springload`](https://github.com/springload/eslint-config-springload) for reuse, with plugins automatically installed.

> See [https://github.com/eslint/eslint/issues/3458](https://github.com/eslint/eslint/issues/3458) for further discussion on this topic. Approach inspired by [`eslint-plugin-react-app`](https://github.com/mmazzarolo/eslint-plugin-react-app).

## Usage

Install the config and its dependencies:

```sh
npm install --save-dev eslint@3 eslint-plugin-springload
```

Configure ESLint to use this config. For example, in your package.json, this would be:

```json
"eslintConfig": {
  "extends": "plugin:springload/recommended"
},
```

### With Prettier

This ESLint plugin comes with a built-in Prettier-compatible config. First, install Prettier:

```sh
npm install --save-dev prettier
```

Switch to the Prettier config:

```json
"eslintConfig": {
  "extends": "plugin:springload/prettier"
},
```

Then, to configure Prettier itself, create a `prettier.config.js` file in the root of your project with:

```js
// Use the Prettier config that comes with eslint-plugin-springload.
module.exports = require('eslint-plugin-springload/prettier.config');
```

### Integration in a development workflow

For Springload projects, linting commands are defined in the package.json as [npm scripts](https://docs.npmjs.com/misc/scripts). Here are example commands leveraging the ESLint and Prettier configuration, to process code in a `lib` subfolder:

```json
"scripts": {
    "linter:js": "eslint",
    "formatter:js": "prettier --write",
    "lint": "npm run linter:js -s -- lib",
    "format": "npm run formatter:js -s -- lib/**/*.js",
}
```

Those commands can then be ran manually.

#### Usage with git pre-commit hook

The above commands are meant to be usable on arbitrary lists of files. Here is an example `pre-commit` script that leverages them to re-format and lint JS when committing:

```sh
# Only keep staged files that are added (A), copied (C) or modified (M).
STAGED=$(git --no-pager diff --name-only --cached --diff-filter=ACM)
# Files which are only partly staged (eg. git add --patch).
PATCH_STAGED=$(git --no-pager diff --name-only --diff-filter=ACM $STAGED)
# Files which are fully staged.
FULLY_STAGED=$(comm -23 <(echo "$STAGED") <(echo "$PATCH_STAGED"))

JS_STAGED=$(grep .js$ <<< "$STAGED" || true)
JS_FULLY_STAGED=$(grep .js$ <<< "$FULLY_STAGED" || true)
SNAPSHOT_STAGED=$(grep .snap$ <<< "$STAGED" || true)

if [ -n "$JS_FULLY_STAGED" ];
then
    # Format and re-stage fully staged files only.
    npm run formatter:js -s -- $JS_FULLY_STAGED
    git add $JS_FULLY_STAGED
fi

if [ -n "$JS_STAGED" ];
then
    npm run linter:js -s -- $JS_STAGED
fi
```

### Configuring the rules

This is a drop-in configuration for Springload projects. Should further customisation be required, rules coming from external plugins require the `springload` prefix:

```diff
{
  "extends": "plugin:springload/recommended"
  "rules": {
-    "react/react-in-jsx-scope": ["warn"],
+    "springload/react/react-in-jsx-scope": ["warn"],
-    "import/prefer-default-export": ["warn"],
+    "springload/import/prefer-default-export": ["warn"],
  }
}
```

### Usage

## Development

### Install

```sh
git clone git@github.com:springload/eslint-plugin-springload.git
cd eslint-plugin-springload
nvm install
# Then, install all project dependencies.
npm install
# Install the git hooks.
./.githooks/deploy
```

### Development

```sh
# Runs linting.
npm run lint
# Runs tests.
npm run test
```

### Releases

This project follows [Semantic Versioning](http://semver.org/spec/v2.0.0.html) as well as ESLint's [Semantic Versioning Policy](https://github.com/eslint/eslint#semantic-versioning-policy).

```sh
# 1. Make a new branch for the release of the new version.
git chore release-vx.y.z
# 2. Update the version in package.json
# 3. Use irish-pub to check the package content. Install with `npm install -g` first.
irish-pub
# 4. Update the [CHANGELOG](CHANGELOG.md) for the upcoming release.
# 5. Create a PR and merge it.
# 6. On master,
npm publish
# 7. Finally, go to GitHub and create a release and a tag for the new version.
```
