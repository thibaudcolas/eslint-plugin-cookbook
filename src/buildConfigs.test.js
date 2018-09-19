const pkg = require("../package.json");
const { CLIEngine } = require("eslint");

const convertRefs = (config) => {
  config.rules = Object.keys(config.rules).reduce((rules, key) => {
    const newKey = key.replace("@thibaudcolas/cookbook/", "");

    rules[newKey] = config.rules[key];

    return rules;
  }, {});

  config.plugins = Object.keys(pkg.dependencies)
    .filter((dep) => dep.startsWith("eslint-plugin"))
    .map((dep) => dep.replace("eslint-plugin-", ""));

  return config;
};

describe("buildConfigs", () => {
  it("recommended is valid", () => {
    const cli = new CLIEngine({
      baseConfig: convertRefs(require("./recommended.json")),
    });

    expect(
      cli.executeOnText("import test from 'potato'; var foo;", "foo.js"),
    ).toMatchObject({
      errorCount: 4,
    });
  });
});
