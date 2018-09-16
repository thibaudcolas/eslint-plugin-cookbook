#!/usr/bin/env node

/**
 * This file is meant to be executed at build time, to generate configs.abstract
 */

const fs = require("fs");
const path = require("path");

const { getComputedConfig, wrapInPlugin } = require("./config");
const prettierConfig = require("../prettier.config");
const base = require("./base");

const configs = {
  recommended: base,
  prettier: {
    extends: base.extends.concat([
      "prettier",
      "prettier/flowtype",
      "prettier/react",
    ]),
    plugins: ["prettier"],
    rules: Object.assign({}, base.rules, {
      "prettier/prettier": ["error", prettierConfig],
    }),
  },
};

Object.keys(configs).forEach((name) => {
  const config = configs[name];
  const computedConfig = getComputedConfig(config);
  const wrappedConfig = wrapInPlugin(computedConfig);

  fs.writeFileSync(
    path.join(__dirname, `${name}.json`),
    JSON.stringify(wrappedConfig),
  );
});
