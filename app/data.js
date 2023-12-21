const badges = require('./badges');
const chalk = require('chalk');

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

const projects = [
  {
    logo: '📦',
    repo: 'tiddlywiki-starter-kit',
    desc: '使用 tiddlywiki 搭建的本地优先的笔记软件',
    techList: [badges.TiddlyWiki5, badges.NodeJS, badges.TailWindCss],
  },
];

// TODO: 在 tiddlywiki-starter-kit 自动构建这个数据; 或者后期晚上到那里
const plugins = [
  {
    logo: '📊',
    name: 'echarts-addons',
    desc: 'echarts addons',
    category: 'charts',
  },
  {
    logo: '🔄',
    name: 'nprogress',
    desc: '在tiddlywiki中使用nprogress',
    category: 'ui',
  },
  {
    logo: '😊',
    name: 'neotw-icons',
    desc: 'iconify 图标库, 100+图标集合',
    category: 'icon',
  },
  {
    logo: '🎶',
    name: 'neotw-music-with-howler',
    desc: '使用howler写的音乐播放器',
    category: 'music',
  },
  {
    logo: '📦',
    name: 'neotw-pwa',
    desc: '让你的TiddlyWiki网页像app一样启动',
    category: 'pwa',
  },
  {
    logo: '🏚️',
    name: 'neotw-homepage',
    desc: 'tiddlywiki 主页展示',
    category: 'homepage',
  },
  {
    logo: '🔔',
    name: 'notify',
    desc: '通知提示插件',
    category: 'notice',
  },
  {
    logo: '😎',
    name: 'tiddlywiki-tailwindcss-plus',
    desc: '不用再担心tiddlywiki的样式冲突了',
    category: 'style',
  },
];

// generate plugins count
console.log(chalk.cyan('📦 plugins count:'), plugins.length);

module.exports = {
  projects: projects.map((project) => ({
    ...project,
    github: createGitHubURL(project.repo),
    badges: [createGitHubStarURL(project.repo)],
  })),
  plugins: plugins
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((plugin) => ({
      ...plugin,
      github: createGitHubPluginURL(plugin.name),
      online: createPluginOnlineURL(plugin.name),
    })),
};
