const { danger, warn, fail } = require("danger");

// Fails if the description is too short.
if (!danger.github.pr.body || danger.github.pr.body.length < 10) {
  fail(":grey_question: This pull request needs a description.");
}

// Warns if the PR title contains [WIP]
const isWIP = danger.github.pr.title.includes("WIP");
if (isWIP) {
  const title = ":construction_worker: Work In Progress";
  const idea =
    "This PR appears to be a work in progress, and may not be ready to be merged yet.";
  warn(`${title} - <i>${idea}</i>`);
}

const hasPackageChanges = danger.git.modified_files.includes("package.json");
const hasLockfileChanges = danger.git.modified_files.includes(
  "package-lock.json",
);

if (hasPackageChanges && !hasLockfileChanges) {
  warn(
    "There are package.json changes with no corresponding lockfile changes.",
  );
}
