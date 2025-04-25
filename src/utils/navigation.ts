import type { NavigationFooter, NavigationHeader } from '../types';

const github = 'https://github.com/jeanalves28/jeanalves28';

export function headerContent(path: string): NavigationHeader {
	switch (path.toLowerCase()) {
		case '/projects':
			return [
				{ title: 'Início', path: '/' },
				{ title: 'Contato', path: '/contact' },
				{ title: 'Código fonte do Portfolio', path: github },
			];

		case '/contact':
			return [
				{ title: 'Início', path: '/' },
				{ title: 'Projetos', path: '/projects' },
				{ title: 'Código fonte do Portfolio', path: github },
			];

		default:
			return [
				{ title: 'Projetos', path: '/projects' },
				{ title: 'Contato', path: 'contact' },
				{ title: 'Código fonte do Portfolio', path: github },
			];
	}
}

export const footerContent: NavigationFooter = [
	{
		path: 'https://www.github.com/jeanalves28',
		alt: 'Github',
		width: '26',
		height: '100',
		src: 'github.svg',
		srcDark: 'github_dark.svg',
	},

	{
		path: 'https://www.linkedin.com/in/jean-alves27',
		alt: 'LinkedIn',
		width: '30',
		height: '100',
		src: 'linkedin.svg',
		srcDark: 'linkedin_dark.svg',
	},

	{
		path: 'mailto:j_alves_19@hotmail.com',
		alt: 'Outlook',
		width: '30',
		height: '100',
		src: 'outlook.svg',
		srcDark: 'outlook_dark.svg',
	},
];
