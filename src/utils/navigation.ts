import type { NavigationHeader } from '../types';

export function pathHeader(path: string): NavigationHeader {
	switch (path.toLowerCase()) {
		case '/projects':
			return {
				title1: 'Home',
				title2: 'Contato',
				path1: '/',
				path2: '/contact',
			};

		case '/contact':
			return {
				title1: 'Home',
				title2: 'Projetos',
				path1: '/',
				path2: '/projects',
			};

		default:
			return {
				title1: 'Projetos',
				title2: 'Contato',
				path1: '/projects',
				path2: '/contact',
			};
	}
}
