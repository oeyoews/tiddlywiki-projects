const fs = require('fs');
const ejs = require('ejs');
const path = require('path');
const prettify = require('html-prettify');
const chalk = require('chalk');
const data = require('../dist/index').default;

const templateFile = path.join(__dirname, './template.ejs');
const outputPath = path.join(__dirname, '../README.md');

(async () => {
  const template = fs.readFileSync(templateFile, 'utf8');

  const html = ejs.render(template, { badges: data });

  fs.writeFileSync(outputPath, prettify(html));
})().then(() => {
  console.log(chalk.bold.green('README.md generated successfully!'));
});