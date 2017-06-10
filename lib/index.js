const { getPrefixedPluginRules } = require('./plugins');
const config = require('./config');

module.exports = {
    configs: {
        recommended: config,
    },
    rules: getPrefixedPluginRules(),
};
