declare const icons: readonly [
  "Angular",
  "ArchLinux",
  "CSharp",
  "CSS3",
  "Chrome",
  "Docker",
  "Elixir",
  "Emacs",
  "ECharts",
  "Golang",
  "HTML5",
  "Java",
  "JavaScript",
  "Kubernetes",
  "Linux",
  "Neovim",
  "NextJS",
  "NodeJS",
  "NPM",
  "NuxtJS",
  "PHP",
  "Python",
  "React",
  "Ruby",
  "Rust",
  "TailwindCSS",
  "TiddlyWiki5",
  "TypeScript",
  "Vercel",
  "Vim",
  "Vite",
  "Vue",
];
declare const info: {
  version: string;
  total: 32;
};
type BadgeNames = (typeof icons)[number];
type Badges = Record<BadgeNames, string>;
declare const badges: Badges;

export { type BadgeNames, badges, icons, info };
