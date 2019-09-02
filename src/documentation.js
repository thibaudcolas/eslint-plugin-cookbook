"use strict";

const fs = require("fs");
const path = require("path");
const getRuleURI = require("eslint-rule-documentation");

const base = require("./base");
const { getComputedConfig } = require("./config");

const MAX_RULE_CONFIG_LENGTH = 60;

const generateList = (items) => {
  return `- ${items.join("\n- ")}`;
};

const isOn = (rule) =>
  Array.isArray(rule) ? isOn(rule[0]) : !["off", 0].includes(rule);

const formatRuleName = (name) => {
  const url = getRuleURI(name).url;

  return `[${name}](${url})`;
};

const formatRuleValue = (value) => {
  let printableValue;

  if (typeof value === "string" || typeof value === "number") {
    printableValue = value;
  } else {
    printableValue = JSON.stringify(value)
      .replace(/[[\]"{}]/g, "")
      .replace(/([:,])/g, "$1 ");
  }

  if (printableValue.length > MAX_RULE_CONFIG_LENGTH * 1.2) {
    printableValue = `${printableValue.substring(0, MAX_RULE_CONFIG_LENGTH)}…`;
  }

  return `\`${printableValue}\``;
};

const formatRows = (rules) => {
  return rules.reduce((print, row) => {
    const newRows = [];

    if (row[1]) {
      newRows.push([`${row[0]}: ${row[1]}`]);
    } else {
      newRows.push(row);
    }

    return print.concat(newRows);
  }, []);
};

const README_PATH = path.join(__dirname, "..", "README.md");
const README_MARKER = "<!-- Generated with: npm run build:docs -->";
const README = fs.readFileSync(README_PATH, "utf-8").split(README_MARKER)[0];

const config = getComputedConfig(base);

const { rules } = config;
const enforcedRules = Object.keys(rules).filter((name) => isOn(rules[name]));
const customRules = Object.keys(base.rules).filter((name) => isOn(rules[name]));

const customConventions = customRules.map((name) => {
  const opts = rules[name];
  const value = Array.isArray(opts) && opts.length === 1 ? opts[0] : opts;
  const row = [formatRuleName(name)];

  if (value !== "error") {
    row.push(formatRuleValue(value));
  }

  return row;
});

const inheritedConventions = enforcedRules
  .filter((name) => !customRules.includes(name))
  .map((name) => {
    const opts = rules[name];
    const value = Array.isArray(opts) && opts.length === 1 ? opts[0] : opts;

    const row = [formatRuleName(name)];

    if (value !== "error") {
      row.push(formatRuleValue(value));
    }

    return row;
  });

const disabled = Object.keys(rules)
  .filter((name) => !isOn(rules[name]))
  .map((name) => [formatRuleName(name)]);

const rulesDocumentation = `
## Rules

### Cookbook config

${generateList(formatRows(customConventions))}

### Rules of [\`eslint-config-airbnb\`](https://github.com/airbnb/javascript)

<details>

${generateList(formatRows(inheritedConventions))}

</details>

### Disabled rules

<details>

${generateList(formatRows(disabled))}

</details>
`;

const newREADME = `${README}${README_MARKER}\n${rulesDocumentation}`;

fs.writeFileSync(README_PATH, newREADME, "utf-8");
console.log("Updated README.md with rules docs:", rulesDocumentation);
