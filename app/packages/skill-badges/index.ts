type BadgeInfo = {
	subject: string;
	color: string;
	logo: string;
	logoColor: string;
	style?: string;
};

const createBadgeURL = ({
	subject, color, logo, logoColor, style
}: BadgeInfo) => {

	const baseURL = 'https://img.shields.io/badge';
	return `${baseURL}/${encodeURIComponent(
		subject
	)}-${color}?style=${style}&logo=${encodeURIComponent(
		logo
	)}&logoColor=${logoColor}`;
};

const defaultBadgeStyle = 'flat-square';

const badgeData: BadgeInfo[] = [
	{ subject: 'HTML5', color: 'E34F26', logo: 'html5', logoColor: 'white' },
	{ subject: 'JavaScript', color: 'F7DF1E', logo: 'javascript', logoColor: 'black' },
	{ subject: 'CSS3', color: '1572B6', logo: 'css3', logoColor: 'white' },
	{ subject: 'Node.js', color: '43853D', logo: 'node.js', logoColor: 'white' },
	{ subject: 'React', color: '20232A', logo: 'react', logoColor: '61DAFB' },
	{ subject: 'Vue.js', color: '35495E', logo: 'vue.js', logoColor: '4FC08D' },
	{ subject: 'TypeScript', color: '007ACC', logo: 'typescript', logoColor: 'white' },
	{ subject: 'Tailwind CSS', color: '38B2AC', logo: 'tailwind-css', logoColor: 'white' },
	{ subject: 'Next.js', color: 'black', logo: 'next.js', logoColor: 'white' },
	{ subject: 'TiddlyWiki5', color: 'black', logo: 'tiddlywiki', logoColor: 'white' },
];

const badges = badgeData.map(item => {
	return createBadgeURL({
		...item,
		style: defaultBadgeStyle
	});
})

export default badges