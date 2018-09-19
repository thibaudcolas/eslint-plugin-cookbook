#!/usr/bin/env node

/**
 * This file is meant to be executed at build time, to generate configs.abstract
 */

const fs = require("fs");
const path = require("path");
const prettier = require("prettier");

const { getComputedConfig, wrapInPlugin } = require("./config");
const base = require("./base");

const configs = {
  recommended: base,
  prettier: {
    extends: base.extends.concat([
      "prettier",
      "prettier/flowtype",
      "prettier/react",
    ]),
  },
};

Object.keys(configs).forEach((name) => {
  const config = configs[name];
  const computedConfig = getComputedConfig(config);
  const wrappedConfig = wrapInPlugin(computedConfig);

  fs.writeFileSync(
    path.join(__dirname, `${name}.json`),
    prettier.format(JSON.stringify(wrappedConfig), { parser: "json" }),
  );
});
