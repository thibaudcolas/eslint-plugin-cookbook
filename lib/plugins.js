const importPlugin = require('eslint-plugin-import');
const jsxA11YPlugin = require('eslint-plugin-jsx-a11y');
const reactPlugin = require('eslint-plugin-react');
const prettierPlugin = require('eslint-plugin-prettier');

const plugins = {
    import: importPlugin,
    'jsx-a11y': jsxA11YPlugin,
    react: reactPlugin,
    prettier: prettierPlugin,
};

/**
 * Check if the rule is from of one of our plugins.
 */
const isPluginRule = rule => rule.indexOf('/') !== -1;

/**
 * Adds a prefix to rules that come from plugins.
 */
const prefixConfigRules = (prefix, rules) => {
    const prefixedRules = {};

    Object.keys(rules).forEach(rule => {
        const name = isPluginRule(rule) ? `${prefix}/${rule}` : rule;
        prefixedRules[name] = rules[rule];
    });

    return prefixedRules;
};

/**
 * Create a rules object from plugin rules.
 * Each rule is prefixed by the name of the plugin it comes from.
 */
const getPrefixedPluginRules = () => {
    const prefixedRules = {};

    Object.keys(plugins).forEach(plugin => {
        const rules = plugins[plugin].rules;

        Object.keys(rules).forEach(rule => {
            const name = `${plugin}/${rule}`;
            prefixedRules[name] = rules[rule];
        });
    });

    return prefixedRules;
};

module.exports = {
    prefixConfigRules,
    getPrefixedPluginRules,
};
