// 导入徽章信息
const badges = require('./badges');

const createGitHubURL = (repo) => `https://github.com/oeyoews/${repo}`;
const createGitHubStarURL = (repo) =>
  `https://img.shields.io/github/stars/oeyoews/${repo}?style=flat-square`;

const data = {
  plugins: [
    {
      name: '',
      desc: '',
      github: '',
      online: '',
    },
  ],
  projects: [
    {
      logo: '📦',
      repo: 'tiddlywiki-starter-kit',
      desc: '使用 tiddlywiki 搭建的本地优先的笔记软件',
      github: createGitHubURL('tiddlywiki-starter-kit'),
      techList: [badges.TiddlyWiki5, badges.NodeJS, badges.TailWindCss],
      badges: [createGitHubStarURL('tiddlywiki-starter-kit')],
    },
  ],
};

// 导出 JavaScript 对象
module.exports = data;
