const pkg = require("../package.json");
const config = require("./recommended.json");

describe("semver - should those tests break, consider releasing a new major version of the package", () => {
  it("dependencies", () => {
    expect(pkg.dependencies).toMatchInlineSnapshot(`
      Object {
        "eslint-plugin-import": "^2.18.2",
        "eslint-plugin-jsx-a11y": "^6.2.3",
        "eslint-plugin-react": "^7.14.3",
        "eslint-plugin-react-hooks": "^1.7.0",
      }
    `);
  });

  it("peerDependencies", () => {
    expect(pkg.peerDependencies).toMatchInlineSnapshot(`
      Object {
        "eslint": "^5.6.0 || ^6.0.0",
      }
    `);
  });

  it("devDependencies", () => {
    const devDependencies = Object.keys(pkg.devDependencies)
      .filter(
        (dep) =>
          dep === "eslint" ||
          dep.startsWith("eslint-config") ||
          dep.startsWith("eslint-plugin"),
      )
      .reduce((deps, key) => {
        deps[key] = pkg.devDependencies[key];
        return deps;
      }, {});
    expect(devDependencies).toMatchInlineSnapshot(`
      Object {
        "eslint": "6.3.0",
        "eslint-config-airbnb": "18.0.1",
        "eslint-config-prettier": "6.1.0",
      }
    `);
  });

  it("config", () => {
    expect(config).toMatchSnapshot();
  });
});
