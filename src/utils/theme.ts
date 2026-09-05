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

export function bgContainer(
	theme: ToggleTheme,
	...path: Array<string>
): string {
	let classes: Array<string> = [];

	for (const param of path) {
		if (param.includes('/')) {
			classes = [
				theme === 'system'
					? 'bg-color-system-card'
					: theme === 'dark'
						? 'bg-color-dark-card'
						: 'bg-color-light-card',
			];
		}

		if (param.includes('/projects')) {
			classes = [
				theme === 'system'
					? 'bg-color-system-card'
					: theme === 'dark'
						? 'bg-color-dark-card'
						: 'bg-color-light-card',
			];
		}

		if (param.includes('/contact')) {
			classes = [
				theme === 'system'
					? 'bg-color-system-form'
					: theme === 'dark'
						? 'bg-color-dark-form'
						: 'bg-color-light-form',
			];
		}

		if (param.includes('nav-dropdown')) {
			classes = [
				...classes,
				theme === 'system'
					? 'nav-menu-bg-color-system'
					: theme === 'dark'
						? 'nav-menu-bg-color-dark'
						: 'nav-menu-bg-color-light',
			];
		}

		if (param.includes('btn-theme')) {
			classes = [
				...classes,
				theme === 'system'
					? 'btn-theme-system'
					: theme === 'dark'
						? 'btn-theme-dark'
						: 'btn-theme-light',
			];
		}

		if (param.includes('loading')) {
			classes = [
				...classes,
				theme === 'system'
					? 'bg-content-loading-system'
					: theme === 'dark'
						? 'bg-content-loading-dark'
						: 'bg-content-loading-light',
			];
		}

		if (param.includes('link-site')) {
			classes = [
				...classes,
				theme === 'system'
					? 'dark:pc:hover:bg-neutral-700/40 pc:hover:bg-neutral-300/40 dark:text-cyan-300 text-sky-500'
					: theme === 'dark'
						? 'pc:hover:bg-neutral-700/40 text-cyan-300'
						: 'pc:hover:bg-neutral-300/40 text-sky-500',
			];
		}

		if (param.includes('from-color-card')) {
			classes = [
				...classes,
				theme === 'system'
					? 'pc:from-white/30 pc:dark:from-white/8'
					: theme === 'dark'
						? 'pc:from-white/8'
						: 'pc:from-white/30',
			];
		}

		if (param.includes('from-linear-transparent-bottom')) {
			classes = [
				...classes,
				theme === 'system'
					? 'from-neutral-50 dark:from-black-card'
					: theme === 'light'
						? 'from-neutral-50'
						: 'from-black-card',
			];
		}

		if (param.includes('message-error')) {
			classes = [
				...classes,
				theme === 'system'
					? 'bg-neutral-200/40 text-rose-500 dark:bg-neutral-900/20 dark:text-red-600'
					: theme === 'dark'
						? 'text-red-600 bg-neutral-900/20'
						: 'text-rose-500 bg-neutral-200/40',
			];
		}
	}

	return classes.join(' ');
}
