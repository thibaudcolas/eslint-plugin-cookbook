const pkg = require("../package.json");
const config = require("./recommended.json");

describe("semver - should those tests break, consider releasing a new major version of the package", () => {
  it("dependencies", () => {
    expect(pkg.dependencies).toMatchInlineSnapshot(`
Object {
  "eslint-plugin-import": "^2.14.0",
  "eslint-plugin-jsx-a11y": "^6.1.1",
  "eslint-plugin-react": "^7.11.1",
}
`);
  });

  it("peerDependencies", () => {
    expect(pkg.peerDependencies).toMatchInlineSnapshot(`
Object {
  "eslint": "^5.6.0",
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
  "eslint": "^5.6.0",
  "eslint-config-airbnb": "^17.1.0",
  "eslint-config-prettier": "^3.0.1",
}
`);
  });

  it("config", () => {
    expect(config).toMatchSnapshot();
  });
});
