import type { ToggleTheme } from '../types';

export function insertClassMenuTheme(...className: Array<string>) {
	const menu = document.getElementById('menu-theme');

	if (menu) {
		for (const name of className) menu.classList.add(name);
	}
}

export function removeClassMenuTheme(...className: Array<string>) {
	const menu = document.getElementById('menu-theme');

	if (menu) {
		for (const name of className) menu.classList.remove(name);
	}
}

export function insertClassNavDropdown(...className: Array<string>) {
	const navDropdown = document.getElementById('nav-menu-dropdown');

	if (navDropdown) {
		for (const name of className) navDropdown.classList.add(name);
	}
}

export function removeClassNavDropdown(...className: Array<string>) {
	const navDropdown = document.getElementById('nav-menu-dropdown');

	if (navDropdown) {
		for (const name of className) navDropdown.classList.remove(name);
	}
}

export function insertColorBtnThemeActivated(theme: ToggleTheme) {
	const btnTheme = document.getElementById('btn-theme');

	if (btnTheme) {
		switch (theme) {
			case 'dark':
				btnTheme.classList.add(
					'shadow-btn-theme-dark',
					'shadow-cyan-400!',
					'border-cyan-300!',
				);
				break;

			case 'light':
				btnTheme.classList.add(
					'shadow-btn-theme',
					'shadow-cyan-300!',
					'border-cyan-400/90!',
				);
				break;

			default:
				btnTheme.classList.add(
					'dark:shadow-btn-theme-dark',
					'dark:shadow-cyan-400!',
					'dark:border-cyan-300!',
				);

				btnTheme.classList.add(
					'shadow-btn-theme',
					'shadow-cyan-300!',
					'border-cyan-400/90!',
				);
		}
	}
}

export function removeColorBtnThemeActivated(theme: ToggleTheme) {
	const btnTheme = document.getElementById('btn-theme');

	if (btnTheme) {
		switch (theme) {
			case 'dark':
				btnTheme.classList.remove(
					'shadow-btn-theme-dark',
					'shadow-cyan-400!',
					'border-cyan-300!',
				);
				break;

			case 'light':
				btnTheme.classList.remove(
					'shadow-btn-theme',
					'shadow-cyan-300!',
					'border-cyan-400/90!',
				);
				break;

			default:
				btnTheme.classList.remove(
					'dark:shadow-btn-theme-dark',
					'dark:shadow-cyan-400!',
					'dark:border-cyan-300!',
				);

				btnTheme.classList.remove(
					'shadow-btn-theme',
					'border-cyan-400/90!',
					'shadow-cyan-300!',
				);
		}
	}
}
