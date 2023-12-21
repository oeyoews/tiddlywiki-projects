interface BadgeInfoBase {
  color: string;
  logo: string;
  logoColor: string;
}

interface BadgeInfo extends BadgeInfoBase {
  subject: string;
}

const icons = [
  'ArchLinux',
  'NuxtJS',
  'Vite',
  'Vim',
  'Neovim',
  'Chrome',
  'NPM',
  'HTML5',
  'JavaScript',
  'CSS3',
  'NodeJS',
  'React',
  'Vue',
  'TypeScript',
  'Neovim',
  'Linux',
  'TailwindCSS',
  'NextJS',
  'TiddlyWiki5',
  'Angular',
  'PHP',
  'Ruby',
  'Python',
  'Java',
  'CSharp',
  'Golang',
  'Rust',
  'Docker',
  'Kubernetes',
  'Vercel',
] as const;

type BadgeNames = (typeof icons)[number];

type BadgeData = Record<BadgeNames, BadgeInfoBase>;
type Badges = Record<BadgeNames, string>;

const createBadgeURL = ({ subject, color, logo, logoColor }: BadgeInfo) => {
  const baseURL = 'https://img.shields.io/badge';
  return `${baseURL}/${encodeURIComponent(
    subject
  )}-${color}?style=flat-square&logo=${encodeURIComponent(
    logo
  )}&logoColor=${logoColor}`;
};

const badgeData: BadgeData = {
  ArchLinux: { color: 'blue', logo: 'arch-linux', logoColor: 'white' },
  NuxtJS: { color: '00C58E', logo: 'nuxt.js', logoColor: 'white' },
  Vite: { color: '2F74C0', logo: 'vite', logoColor: 'white' },
  Vim: { color: '007ACC', logo: 'vim', logoColor: 'white' },
  Neovim: { color: '2E8B57', logo: 'neovim', logoColor: 'white' },
  Chrome: { color: '0078D7', logo: 'google-chrome', logoColor: 'white' },
  NPM: { color: 'C12127', logo: 'npm', logoColor: 'white' },
  HTML5: { color: 'E34F26', logo: 'html5', logoColor: 'white' },
  JavaScript: { color: 'F7DF1E', logo: 'javascript', logoColor: 'black' },
  CSS3: { color: '1572B6', logo: 'css3', logoColor: 'white' },
  NodeJS: { color: '43853D', logo: 'node.js', logoColor: 'white' },
  React: { color: '20232A', logo: 'react', logoColor: '61DAFB' },
  Vue: { color: '35495E', logo: 'vue.js', logoColor: '4FC08D' },
  TypeScript: { color: '007ACC', logo: 'typescript', logoColor: 'white' },
  TailwindCSS: { color: '38B2AC', logo: 'tailwindcss', logoColor: 'white' },
  NextJS: { color: 'black', logo: 'next.js', logoColor: 'white' },
  TiddlyWiki5: { color: 'black', logo: 'tiddlywiki', logoColor: 'white' },
  Angular: { color: 'DD0031', logo: 'angular', logoColor: 'white' },
  PHP: { color: '777BB4', logo: 'php', logoColor: 'white' },
  Ruby: { color: 'CC342D', logo: 'ruby', logoColor: 'white' },
  Python: { color: '3776AB', logo: 'python', logoColor: 'white' },
  Java: { color: '007396', logo: 'openjdk', logoColor: 'white' },
  CSharp: { color: '239120', logo: 'c#', logoColor: 'white' },
  Golang: { color: '00ADD8', logo: 'go', logoColor: 'white' },
  Rust: { color: '000000', logo: 'rust', logoColor: 'white' },
  Docker: { color: '2496ED', logo: 'docker', logoColor: 'white' },
  Kubernetes: { color: '326CE5', logo: 'kubernetes', logoColor: 'white' },
  Vercel: { color: 'black', logo: 'vercel', logoColor: 'white' },
  Linux: { color: 'FCC624', logo: 'linux', logoColor: 'black' },
};

const badges = {} as Badges;

Object.keys(badgeData).forEach((key: string) => {
  badges[key as BadgeNames] = createBadgeURL({
    subject: key,
    ...badgeData[key as BadgeNames],
  });
});

export default badges;
export type { BadgeNames };
