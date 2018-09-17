const { CLIEngine } = require("eslint");

const { prefixConfigRules } = require("./plugins");

// Very heavy-handed, and likely brittle for a million reasons.
// This is just a test to see what happens, don't do this at home.
const getComputedConfig = (baseConfig) => {
  const cli = new CLIEngine({
    useEslintrc: false,
    allowInlineConfig: false,
    baseConfig,
  });

  const config = cli.getConfigForFile("index.js");
  delete config.filePath;
  delete config.baseDirectory;

  return config;
};

// Wraps a given config object with the right dependencies for consumption
// as a pluginc onfig.
const wrapInPlugin = (config) => {
  return Object.assign({}, config, {
    // We expose a config already computed from the whole extends chain, so no extends here.
    extends: [],
    // Plugins appear to come from this plugin, so it's the only one externally visible.
    plugins: ["@thibaudcolas/cookbook"],
    // The rules from third-party plugins need to be prefixed so they reference our plugin instead.
    rules: prefixConfigRules("@thibaudcolas/cookbook", config.rules),
  });
};

module.exports = {
  getComputedConfig,
  wrapInPlugin,
};
