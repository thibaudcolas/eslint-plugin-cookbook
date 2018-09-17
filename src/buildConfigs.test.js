const pkg = require("../package.json");
const { CLIEngine } = require("eslint");

describe("buildConfigs", () => {
  describe("recommended", () => {
    it("is a valid config", () => {
      const config = require("./recommended.json");

      config.rules = Object.keys(config.rules).reduce((rules, key) => {
        const newKey = key.replace("@thibaudcolas/cookbook/", "");

        rules[newKey] = config.rules[key];

        return rules;
      }, {});

      config.plugins = Object.keys(pkg.dependencies)
        .filter((dep) => dep.startsWith("eslint-plugin"))
        .map((dep) => dep.replace("eslint-plugin-", ""));

      const cli = new CLIEngine({
        baseConfig: config,
      });

      expect(
        cli.executeOnText("import test from 'potato'; var foo;").results[0]
          .messages,
      ).toHaveLength(4);
    });
  });
});
