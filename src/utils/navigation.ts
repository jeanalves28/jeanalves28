import type { NavigationFooter, NavigationHeader } from '../types';

const githubRepository = 'https://www.github.com/jeanalves28/jeanalves28';

export function headerContent(path: string): NavigationHeader {
	switch (path.toLowerCase()) {
		case '/projects':
			return [
				{ title: 'Início', path: '/' },
				{ title: 'Contato', path: '/contact' },
				{ title: 'Código fonte do Portfolio', path: githubRepository },
			];

		case '/contact':
			return [
				{ title: 'Início', path: '/' },
				{ title: 'Projetos', path: '/projects' },
				{ title: 'Código fonte do Portfolio', path: githubRepository },
			];

		default:
			return [
				{ title: 'Projetos', path: '/projects' },
				{ title: 'Contato', path: '/contact' },
				{ title: 'Código fonte do Portfolio', path: githubRepository },
			];
	}
}

export const footerContent: NavigationFooter = [
	{
		path: 'https://www.github.com/jeanalves28',
		alt: 'Github',
		width: 25,
		height: 25,
		src: 'github.svg',
		srcDark: 'github_dark.svg',
	},

	{
		path: 'https://www.linkedin.com/in/jean-alves27',
		alt: 'LinkedIn',
		width: 30,
		height: 30,
		src: 'linkedin.svg',
		srcDark: 'linkedin_dark.svg',
	},

	{
		path: 'mailto:j_alves_19@hotmail.com',
		alt: 'Outlook',
		width: 30,
		height: 30,
		src: 'outlook.svg',
		srcDark: 'outlook_dark.svg',
	},
];
