const { danger, warn, fail, } = require('danger');
const fs = require('fs');
const path = require('path');

// Setup
const pr = danger.github.pr;
const bodyAndTitle = (pr.body + pr.title).toLowerCase();

// Custom modifiers for people submitting PRs to be able to say "skip this"
const skipTests = bodyAndTitle.includes('skip new tests');
const skipVisualDiff = bodyAndTitle.includes('skip visual diff');
const hasScreenShots = pr.body.includes('.png')
  || pr.body.includes('.jpg')
  || pr.body.includes('.gif');

// Check for description
if (danger.github.pr.body.length < 10) {
  fail('This pull request needs a description.');
}

// Warn when there is a big PR
const bigPRThreshold = 2000;
if (pr.additions + pr.deletions > bigPRThreshold) {
  warn(':exclamation: Big PR');
}

// Gather changes
const modifiedFiles = danger.git.modified_files.filter(path => path.endsWith('js'));

// Check for console.log statements
modifiedFiles.forEach((file) => {
  const content = fs.readFileSync(file).toString();
  if (content.includes('console.log') || content.includes('console.warn')) {
    fail(`a \`console.log\` was left in file (${file})`);
  }
});

// Check that every file touched has a corresponding test file
const correspondingTestsForModifiedFiles = modifiedFiles.map((f) => {
  const newPath = path.dirname(f);
  const name = path.basename(f);
  return `${newPath}/${name}`;
});

const testFilesThatDontExist = correspondingTestsForModifiedFiles
  .filter(f => !f.includes('__stories__')) // skip stories
  .filter(f => !fs.existsSync(f));

// Find changed React components
const changedComponents = modifiedFiles.filter((file) => {
  const content = fs.readFileSync(file).toString();
  return content.includes('React');
});

function customModifiers(modifier, messageTitle, messageDescription) {
  const result = `${messageTitle}:
  ${modifier.map(f => `- \`${f}\``).join('\n')}
  ${messageDescription}`;
  warn(result);
}
if (testFilesThatDontExist.length > 0 && !skipTests) {
  customModifiers(testFilesThatDontExist, 'Missing Test Files',
    'If these files are supposed to not exist, please update your PR body to include "Skip New Tests".');
}

// Check for images in PR description if new components added
if (changedComponents.length > 0 && !skipVisualDiff && !hasScreenShots) {
  customModifiers(changedComponents, 'Should there be images to represent these components',
    'If these changes are not visual, please update your PR body to include "Skip Visual Diff".');
}
