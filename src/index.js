const { getPrefixedPluginRules } = require("./plugins");
const recommended = require("./recommended.json");

module.exports = {
  configs: {
    recommended: recommended,
  },
  rules: getPrefixedPluginRules(),
};
