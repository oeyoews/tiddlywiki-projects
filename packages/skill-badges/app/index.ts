import fs from 'fs';
import ejs from 'ejs';
import path from 'path';
import prettify from 'html-prettify';
import chalk from 'chalk';
import data from '../index';

const templateFile = path.join(__dirname, './template.ejs');
const outputPath = path.join(__dirname, '../README.md');

const usageFilePath = path.join(__dirname, './usage.md');
const usage = fs.readFileSync(usageFilePath, 'utf8');

console.log(chalk.cyan('Generating README.md...'));


(async () => {
	const template = fs.readFileSync(templateFile, 'utf8');

	const html = ejs.render(template, { badges: data });

	fs.writeFileSync(outputPath, usage + '\n' + prettify(html));
})().then(() => {
	console.log(chalk.bold.green('README.md generated successfully!'));
	console.log(chalk.bold.green(`generated ${Object.keys(data).length} badges`));
});
