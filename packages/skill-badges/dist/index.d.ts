type BadgeNames = 'ArchLinux' | 'NuxtJS' | 'Vite' | 'Vim' | 'Neovim' | 'Chrome' | 'NPM' | 'Linux' | 'HTML5' | 'JavaScript' | 'CSS3' | 'NodeJS' | 'React' | 'Vue' | 'TypeScript' | 'TailwindCSS' | 'NextJS' | 'TiddlyWiki5' | 'Angular' | 'PHP' | 'Ruby' | 'Python' | 'Java' | 'CSharp' | 'Golang' | 'Rust' | 'Docker' | 'Kubernetes' | 'Vercel';
type Badges = Record<BadgeNames, string>;
declare const badges: Badges;
export default badges;
export type { BadgeNames };
