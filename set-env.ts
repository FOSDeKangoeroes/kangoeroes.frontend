import { writeFile } from 'fs';
import { argv } from 'yargs';

// This is good for local dev environments, when it's better to
// store a projects environment variables in a .gitignore'd file
require('dotenv').config({path: './app.env'});

// Would be passed to script like this:
// `ts-node set-env.ts --environment=dev`
// we get it from yargs's argv object
const environment = argv.environment;
const isProd = environment === 'prod';

const targetPath = `./frontend/environments/environment.${environment}.ts`;
const envConfigFile = `
export const environment = {
  production: ${isProd},
  AUTH0_CLIENTID: "${process.env.AUTH0_CLIENTID}",
  AUTH0_DOMAIN: "${process.env.AUTH0_DOMAIN}",
  AUTH0_AUDIENCE: "${process.env.AUTH0_AUDIENCE}",
  AUTH0_REDIRECTURI: "${process.env.AUTH0_REDIRECTURI}",
  baseUrl: "${process.env.baseUrl}"
};
`;
writeFile(targetPath, envConfigFile, function (err) {
    if (err) {
        console.log(err);
    }

    console.log(`Output generated at ${targetPath}`);
});
