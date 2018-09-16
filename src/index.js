const { getPrefixedPluginRules } = require("./plugins");
const recommended = require("./recommended.json");
const prettier = require("./prettier.json");

module.exports = {
  configs: {
    recommended: recommended,
    prettier: prettier,
  },
  rules: getPrefixedPluginRules(),
};
