const BASE = {
  // Temporary warning comments are ok.
  "no-warning-comments": [
    1,
    { terms: ["todo", "fixme", "xxx"], location: "start" },
  ],
};

const IMPORTS = {
  "import/no-extraneous-dependencies": [
    2,
    {
      devDependencies: [
        "test/**",
        "tests/**",
        "spec/**",
        "**/__tests__/**",
        "**/__mocks__/**",
        "test.{js,jsx}",
        "test-*.{js,jsx}",
        "**/*{.,_}{test,spec}.{js,jsx}",
        "**/jest.config.js",
        "**/vue.config.js",
        "**/webpack.config.js",
        "**/webpack.config.*.js",
        "**/rollup.config.js",
        "**/rollup.config.*.js",
        "**/gulpfile.js",
        "**/gulpfile.*.js",
        "**/Gruntfile{,.js}",
        "**/protractor.conf.js",
        "**/protractor.conf.*.js",
        "**/dangerfile.js",
      ],
      optionalDependencies: false,
    },
  ],
};

const REACT = {
  // We do not want files whose content might change to have to be renamed.
  "react/jsx-filename-extension": [2, { extensions: [".js"] }],
};

const LEGACY = {
  // Does not work at the moment for nested fields.
  // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md
  "jsx-a11y/label-has-for": [0],
  "jsx-a11y/label-has-associated-control": [0],
  // Do not enforce reassignment to properties of object parameters.
  "no-param-reassign": [2, { props: false }],
  // Only forbid "any" proptype, no other.
  "react/forbid-prop-types": [2, { forbid: ["any"] }],
  // Disable requirement to not use bind.
  "react/jsx-no-bind": [0],
};

module.exports = {
  extends: ["airbnb", "prettier", "prettier/flowtype", "prettier/react"],

  rules: Object.assign({}, BASE, IMPORTS, REACT, LEGACY),

  // http://eslint.org/docs/user-guide/configuring#specifying-environments
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
    commonjs: true,
  },
};
