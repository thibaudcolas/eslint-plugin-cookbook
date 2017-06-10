const { prefixConfigRules, getPrefixedPluginRules } = require('./plugins');

describe('plugins', () => {
    it('prefixConfigRules', () => {
        expect(prefixConfigRules('test', {
            'react/jsx-indent': [0],
            'max-len': [0],
            'import/prefer-default-export': [0],
            'jsx-a11y/label-has-for': [0],
        })).toEqual({
            'test/react/jsx-indent': [0],
            'max-len': [0],
            'test/import/prefer-default-export': [0],
            'test/jsx-a11y/label-has-for': [0],
        });
    });

    it('getPrefixedPluginRules', () => {
        expect(getPrefixedPluginRules()).toMatchObject({
            'import/prefer-default-export': {},
            'react/sort-prop-types': {},
        });
    });
});
