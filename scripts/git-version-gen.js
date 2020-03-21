const git = require('git-rev-sync');
const { writeFileSync } = require('fs');

const gitInfo = {
  commit: git.short(),
  commitLong: git.long(),
  branch: git.branch()
};
const ts = 'export const gitVersion = ' + JSON.stringify(gitInfo, null, 2);

writeFileSync('projects/kangoeroes-frontend-core/src/lib/config/git-version.ts', ts);
