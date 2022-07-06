/*
    Author:      Ali Ataf
    Description: Script to create new module
    USE:         node create-module.js <new module name>
*/
const fse = require('fs-extra');
const path = require('path');

const examplePath = path.join(__dirname, 'src', 'modules', 'example-module');

const newModuleName = process.argv[2];

if (typeof newModuleName !== 'string') {
  throw new Error('New module name must be provided!');
}

const modulePath = path.join(__dirname, 'src', 'modules', newModuleName);
if (fse.existsSync(modulePath)) {
  throw new Error(`Module ${newModuleName} already exists`);
}

fse.copySync(examplePath, modulePath, {
  errorOnExist: true,
  overwrite: false,
  recursive: true,
});
// console.log(`Done! Module ${newModuleName} has been created successfully`);
