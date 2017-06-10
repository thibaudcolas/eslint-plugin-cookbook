const path = require('path');
// TODO Remove this since
// const config = require('eslint-config-springload');
const CLIEngine = require('eslint').CLIEngine;

const { prefixConfigRules } = require('./plugins');

// TODO Very heavy-handed, and likely brittle for a million reasons.
// This is just a test to see what happens, don't do this at home.
const getComputedConfig = () => {
    const cli = new CLIEngine({
        useEslintrc: false,
        // Point to a file that has the config we want to expose.
        configFile: path.join(__dirname, '.eslintrc.js'),
    });

    // This does not have to point to the same file.
    return cli.getConfigForFile('.eslintrc.js');
};

const config = getComputedConfig();

module.exports = {
    parser: require.resolve('babel-eslint'),
    // TODO extends is not necessary since we now expose a config computed from the whole extends chain.
    // extends: config.extends,
    plugins: ['springload'],
    // The rules from third-party plugins need to be prefixed
    // so they reference our plugin instead.
    rules: prefixConfigRules('springload', config.rules),
    settings: config.settings,
    env: config.env,
    root: config.root,
    parserOptions: config.parserOptions,
};
