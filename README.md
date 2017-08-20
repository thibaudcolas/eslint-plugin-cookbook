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
