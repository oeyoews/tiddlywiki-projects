const fs = require('fs');
const ejs = require('ejs');
const path = require('path');
const prettify = require('html-prettify');
const chalk = require('chalk');

const data = require('./data');

const tplPath = path.join(__dirname, './template.ejs');
const outputPath = path.join(__dirname, '../README.md');

(async () => {
  const tplStr = fs.readFileSync(tplPath, 'utf8');

  const html = ejs.render(tplStr, {
    ...data,
  });

  let prettyHtml = prettify(html);
  prettyHtml += `
<!-- generated at ${new Date().toLocaleString()} -->`;

  fs.writeFileSync(outputPath, prettyHtml);
})().then(() => {
  console.log(chalk.bold.green('README.md generated successfully!'));
});
