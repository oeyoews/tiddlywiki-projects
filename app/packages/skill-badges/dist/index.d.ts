type BadgeNames = 'HTML5' | 'JavaScript' | 'CSS3' | 'NodeJS' | 'React' | 'Vue' | 'TypeScript' | 'TailwindCSS' | 'NextJS' | 'TiddlyWiki5';
type Badges = {
    [K in BadgeNames]: string;
};
declare const badges: Badges;
export default badges;
