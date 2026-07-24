import { useContext } from 'react';
import { contextTheme } from '../custom';
import type { ToggleTheme } from '../types';

export function InputColors(
	classSystem: string,
	classDark: string,
	classLight: string,
) {
	const { theme } = useContext(contextTheme);

	return theme === 'system'
		? classSystem
		: theme === 'dark'
			? classDark
			: classLight;
}

export function textColor(theme: ToggleTheme, transition = true) {
	const classesTransition = transition
		? ' transition-color delay-200 duration-200'
		: '';

	return theme === 'system'
		? `text-color-system${classesTransition}`
		: theme === 'dark'
			? `text-color-dark${classesTransition}`
			: `text-color-light${classesTransition}`;
}

export function bgColor(theme: ToggleTheme, path?: string): string {
	if (path === '/contact') {
		return theme === 'system'
			? 'bg-image-contact-system'
			: theme === 'dark'
				? 'bg-image-contact-dark'
				: 'bg-image-contact-light';
	}

	return theme === 'system'
		? 'bg-color-system'
		: theme === 'dark'
			? 'bg-color-dark'
			: 'bg-color-light';
}

export function bgContainer(theme: ToggleTheme, path: string): string {
	if (path.includes('/contact')) {
		return theme === 'system'
			? 'bg-color-system-form'
			: theme === 'dark'
				? 'bg-color-dark-form'
				: 'bg-color-light-form';
	}

	if (path.includes('/projects')) {
		return theme === 'system'
			? 'bg-color-system-card'
			: theme === 'dark'
				? 'bg-color-dark-card'
				: 'bg-color-light-card';
	}

	return '';
}
