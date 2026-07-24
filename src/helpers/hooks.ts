import type { TargetForm } from '../types';

export function setInputThemeError(element: TargetForm) {
	element.classList.forEach((className) => {
		if (/^input[-_][a-z0-9]+[-_]system$/i.test(className.trim())) {
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				element.classList.add('input-red-dark');
			} else element.classList.add('input-red');
		} else if (/^input[-_][a-z0-9]+[-_]dark$/i.test(className.trim())) {
			element.classList.add('input-red-dark');
		} else if (/^input[-_][a-z0-9]+([-_]light)?$/i.test(className.trim())) {
			element.classList.add('input-red');
		}
	});
}

export const removeInputThemeError = (element: TargetForm) =>
	element.classList.remove('input-red', 'input-red-dark');
