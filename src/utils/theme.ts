import type { ToggleTheme } from '../types';

export const textColor = (theme: ToggleTheme) =>
	theme === 'system'
		? 'text-color-system'
		: theme === 'dark'
			? 'text-color-dark'
			: 'text-color-light';

export function bgColor(theme: ToggleTheme, path?: string): string {
	if (path === '/contact') return theme === 'system'
		? 'bg-image-contact-system'
		: theme === 'dark'
			? 'bg-image-contact-dark'
			: 'bg-image-contact-light';

	return theme === 'system'
		? 'bg-color-system'
		: theme === 'dark'
			? 'bg-color-dark'
			: 'bg-color-light';
}

export function bgContainer(theme: ToggleTheme, path?: string): string {
	if (path === '/contact') return theme === 'system'
		? 'bg-color-container-system'
		: theme === 'dark'
			? 'bg-color-container-dark'
			: 'bg-color-container-light';

	return '';
}
