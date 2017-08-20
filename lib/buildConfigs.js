#!/usr/bin/env node

/**
 * This file is meant to be executed at build time, to generate configs.abstract
 */

const fs = require('fs');
const path = require('path');

const { getComputedConfig, wrapInPlugin } = require('./config');

const configs = {
    recommended: {
        extends: ['springload'],
    },
    prettier: {
        extends: [
            'springload',
            'prettier',
            'prettier/flowtype',
            'prettier/react',
        ],
        plugins: ['prettier'],
        rules: {
            // https://github.com/prettier/prettier#api
            // As command-line flags:
            // prettier --print-width 80 --tab-width 4 --single-quote --trailing-comma all
            'prettier/prettier': [
                'error',
                {
                    printWidth: 80,
                    tabWidth: 4,
                    singleQuote: true,
                    trailingComma: 'all',
                },
            ],
        },
    },
};

Object.keys(configs).forEach(name => {
    const config = configs[name];
    const computedConfig = getComputedConfig(config);
    const wrappedConfig = wrapInPlugin(computedConfig);

    fs.writeFileSync(
        path.join(__dirname, `${name}.json`),
        JSON.stringify(wrappedConfig),
    );
});
