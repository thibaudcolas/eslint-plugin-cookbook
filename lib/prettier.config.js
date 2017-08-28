// https://github.com/prettier/prettier#api
module.exports = {
    printWidth: 80,
    tabWidth: 4,
    semicolons: true,
    singleQuote: true,
    trailingComma: 'all',
    bracketSpacing: true,
    jsxBracketSameLine: false,
    overrides: [
        {
            files: '*.json',
            options: {
                tabWidth: 2,
            },
        },
    ],
};
