const fs = require('fs');
const ejs = require('ejs');
const path = require('path');
const prettify = require('html-prettify');
const chalk = require('chalk');

ejs.delimiter = '%';
ejs.openDelimiter = '<';
ejs.closeDelimiter = '>';

const data = require('./data');

const templateFile = path.join(__dirname, './template.ejs');
const outputPath = path.join(__dirname, '../README.md');

(async () => {
  const template = fs.readFileSync(templateFile, 'utf8');

  const html = ejs.render(template, data);

  fs.writeFileSync(outputPath, prettify(html));
})().then(() => {
  console.log(chalk.bold.green('README.md generated successfully!'));
});
