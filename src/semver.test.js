const pkg = require("../package.json");
const config = require("./base");

describe("semver - should those tests break, consider releasing a new major version of the package", () => {
  it("dependencies", () => {
    expect(pkg.dependencies).toMatchSnapshot();
  });

  it("peerDependencies", () => {
    expect(pkg.peerDependencies).toMatchSnapshot();
  });

  it("devDependencies", () => {
    const devDependencies = Object.keys(pkg.devDependencies)
      .filter((dep) => dep.startsWith("eslint"))
      .reduce((deps, key) => {
        deps[key] = pkg.devDependencies[key];
        return deps;
      }, {});
    expect(devDependencies).toMatchSnapshot();
  });

  it("custom config", () => {
    expect(config).toMatchSnapshot();
  });
});
