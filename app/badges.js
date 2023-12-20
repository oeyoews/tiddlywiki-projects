const createBadgeURL = (
  subject,
  color,
  logo,
  logoColor,
  style = 'flat-square'
) => {
  const baseURL = 'https://img.shields.io/badge';
  return `${baseURL}/${encodeURIComponent(
    subject
  )}-${color}?style=${style}&logo=${encodeURIComponent(
    logo
  )}&logoColor=${logoColor}`;
};

const baseURL = `https://img.shields.io/badge`;

module.exports = {
  HTML: createBadgeURL('HTML5', 'E34F26', 'html5', 'white'),
  JavaScript: createBadgeURL('JavaScript', 'F7DF1E', 'javascript', 'black'),
  CSS: createBadgeURL('CSS3', '1572B6', 'css3', 'white'),
  NodeJS: createBadgeURL('Node.js', '43853D', 'node.js', 'white'),
  React: createBadgeURL('React', '20232A', 'react', '61DAFB'),
  Vue: createBadgeURL('Vue.js', '35495E', 'vue.js', '4FC08D'),
  TypeScript: createBadgeURL('TypeScript', '007ACC', 'typescript', 'white'),
  TailWindCss: createBadgeURL(
    'Tailwind CSS',
    '38B2AC',
    'tailwind-css',
    'white'
  ),
  NextJs: createBadgeURL('Next.js', 'black', 'next.js', 'white'),
  TiddlyWiki5: createBadgeURL('TiddlyWiki5', 'black', 'tiddlywiki', 'white'),
};
