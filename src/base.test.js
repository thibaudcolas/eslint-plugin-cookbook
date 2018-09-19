const path = require("path");
const CLIEngine = require("eslint").CLIEngine;

const base = require("./base");

describe("config", () => {
  it("works", () => {
    const cli = new CLIEngine({
      useEslintrc: false,
      configFile: path.join(__dirname, "base.js"),
    });

    expect(cli.executeOnText("var foo\n")).toMatchObject({
      errorCount: 2,
      warningCount: 0,
    });
  });

  it("semver", () => {
    expect(base).toMatchSnapshot();
  });
});
