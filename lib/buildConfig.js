#!/usr/bin/env node

/**
 * This file is meant to be executed at build time, to generate a ready to use config.
 */

const fs = require('fs');
const path = require('path');
const { CLIEngine } = require('eslint');

const { prefixConfigRules } = require('./plugins');

// Very heavy-handed, and likely brittle for a million reasons.
// This is just a test to see what happens, don't do this at home.
const getComputedConfig = () => {
    const cli = new CLIEngine({
        useEslintrc: false,
        allowInlineConfig: false,
        baseConfig: {
            extends: 'springload',
        },
    });

    return cli.getConfigForFile('index.js');
};

const computedConfig = getComputedConfig();

const config = Object.assign({}, computedConfig, {
    parser: 'babel-eslint',
    // We expose a config already computed from the whole extends chain, so no extends here.
    extends: [],
    plugins: ['springload'],
    // The rules from third-party plugins need to be prefixed so they reference our plugin instead.
    rules: prefixConfigRules('springload', computedConfig.rules),
});

fs.writeFileSync(path.join(__dirname, 'config.json'), JSON.stringify(config));
