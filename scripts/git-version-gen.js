const git = require('git-rev-sync');
const { writeFileSync } = require('fs');

let fullBranchName = process.env.GITHUB_REF || git.branch();

if(fullBranchName.includes('/')) {
  fullBranchName = fullBranchName.split('/')[2];
}


const gitInfo = {
  commit: git.short(),
  commitLong: git.long(),
  branch: fullBranchName
};
const ts = 'export const gitVersion = ' + JSON.stringify(gitInfo, null, 2);

writeFileSync('projects/kangoeroes-frontend-core/src/lib/config/git-version.ts', ts);
