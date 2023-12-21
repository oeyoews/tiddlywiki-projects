type BadgeNames = 'Linux' | 'HTML5' | 'JavaScript' | 'CSS3' | 'NodeJS' | 'React' | 'Vue' | 'TypeScript' | 'TailwindCSS' | 'NextJS' | 'TiddlyWiki5' | 'Angular' | 'PHP' | 'Ruby' | 'Python' | 'Java' | 'CSharp' | 'Golang' | 'Rust' | 'Docker' | 'Kubernetes' | 'Vercel';
type Badges = {
    [K in BadgeNames]: string;
};
declare const badges: Badges;
export default badges;
