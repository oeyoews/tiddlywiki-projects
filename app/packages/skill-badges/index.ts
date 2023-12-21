interface BadgeInfoBase {
	color: string;
	logo: string;
	logoColor: string;
}

interface BadgeInfo extends BadgeInfoBase {
	subject: string;
}

type BadgeNames = 'HTML5' | 'JavaScript' | 'CSS3' | 'NodeJS' | 'React' | 'Vue' | 'TypeScript' | 'TailwindCSS' | 'NextJS' | 'TiddlyWiki5';
type BadgeData = {
	[K in BadgeNames]: BadgeInfoBase;
};
type Badges = {
	[K in BadgeNames]: string;
};


const createBadgeURL = ({
	subject, color, logo, logoColor
}: BadgeInfo) => {

	const baseURL = 'https://img.shields.io/badge';
	return `${baseURL}/${encodeURIComponent(
		subject
	)}-${color}?style=flat-square&logo=${encodeURIComponent(
		logo
	)}&logoColor=${logoColor}`;
};

const badgeData: BadgeData = {
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
}

const badges = {} as Badges;

Object.keys(badgeData).forEach((key: string) => {
	badges[key as BadgeNames] = createBadgeURL({
		subject: key as BadgeNames,
		...badgeData[key as BadgeNames]
	});
});

export default badges