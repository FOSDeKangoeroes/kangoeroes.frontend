const git = require('git-rev-sync');
const { writeFileSync } = require('fs');

const fullBranchName = process.env.GITHUB_REF || git.short();
let shortName = 'dev'
if(fullBranchName) {
  shortName = fullBranchName.split('/')[2];
}


const gitInfo = {
  commit: git.short(),
  commitLong: git.long(),
  branch: shortName
};
const ts = 'export const gitVersion = ' + JSON.stringify(gitInfo, null, 2);

writeFileSync('projects/kangoeroes-frontend-core/src/lib/config/git-version.ts', ts);
