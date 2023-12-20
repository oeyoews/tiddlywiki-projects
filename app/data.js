// 导入徽章信息
const badges = require('./badges');

const createGitHubURL = (repo) => `https://github.com/oeyoews/${repo}`;
const createGitHubStarURL = (repo) =>
  `https://img.shields.io/github/stars/oeyoews/${repo}?style=flat-square`;

const pluginBaseURL = '$:/plugins/oeyoews/';
const createGitHubPluginURL = (repo) =>
  `https://github.com/oeyoews/tiddlywiki-starter-kit/tree/main/plugins/oeyoews/${repo}`;
const createPluginOnlineURL = (repo) =>
  `https://tiddlywiki-starter-kit.vercel.app/#${encodeURIComponent(
    pluginBaseURL + repo
  )}`;

module.exports = {
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
  plugins: [
    {
      logo: '📦',
      name: 'neotw-pwa',
      desc: '让你的TiddlyWiki网页像app一样启动',
      github: createGitHubPluginURL('neotw-pwa'),
      online: createPluginOnlineURL('neotw-pwa'),
    },
    {
      logo: '🏚️',
      name: 'neotw-homepage',
      desc: 'tiddlywiki 主页展示',
      github: createGitHubPluginURL('neotw-homepage'),
      online: createPluginOnlineURL('neotw-homepage'),
    },
    {
      logo: '🔔',
      name: 'notify',
      desc: '通知提示插件',
      github: createGitHubPluginURL('notify'),
      online: createPluginOnlineURL('notify'),
    },
    {
      logo: '😎',
      name: 'tiddlywiki-tailwindcss-plus',
      desc: '在tiddlywiki中使用tailwindcss',
      desc: '不用再担心tiddlywiki的样式冲突了',
      github: createGitHubPluginURL('tiddlywiki-tailwindcss-plus'),
      online: createPluginOnlineURL('tiddlywiki-tailwindcss-plus'),
    },
  ],
};
