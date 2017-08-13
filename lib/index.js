const { getPrefixedPluginRules } = require('./plugins');
const config = require('./config.json');

module.exports = {
    configs: {
        recommended: config,
    },
    rules: getPrefixedPluginRules(),
};
