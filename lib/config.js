const baseConfig = require('eslint-config-springload');

const { prefixConfigRules } = require('./plugins');

module.exports = {
    parser: require.resolve('babel-eslint'),
    plugins: ['springload'],
    // The rules from third-party plugins need to be prefixed
    // so they reference our plugin instead.
    rules: prefixConfigRules('springload', baseConfig.rules),
    settings: baseConfig.settings,
    env: baseConfig.env,
    root: baseConfig.root,
    parserOptions: baseConfig.parserOptions,
};
