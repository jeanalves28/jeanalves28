import type { ToggleTheme } from '../types';

/**
 * Adiciona os metas para o theme system em smartphone.
 */
export function setThemeSystemSmartphone() {
	document.querySelectorAll('meta[name="theme-color"]')
		.forEach((meta) => {
			meta.remove();
		});

	const metaTheme = document.createElement('meta');
	const metaThemeDark = document.createElement('meta');

	const bgLight = getComputedStyle(document.documentElement)
		.getPropertyValue(
			'--bg-color-light',
		);

	const bgDark = getComputedStyle(document.documentElement)
		.getPropertyValue(
			'--bg-color-dark',
		);

	metaTheme.setAttribute('name', 'theme-color');

	metaTheme.setAttribute('content', bgLight);

	metaThemeDark.setAttribute('name', 'theme-color');

	metaThemeDark.setAttribute('content', bgDark);

	metaThemeDark.setAttribute('media', '(prefers-color-scheme: dark)');

	document.head.appendChild(metaTheme);

	document.head.appendChild(metaThemeDark);
}

/**
 * Adiciona os metas para o theme light em smartphone.
 */
export function setThemeLightSmartphone() {
	document.querySelectorAll('meta[name="theme-color"]')
		.forEach((meta) => {
			meta.remove();
		});

	const metaThemeLight = document.createElement('meta');

	const bgLight = getComputedStyle(document.documentElement)
		.getPropertyValue(
			'--bg-color-light',
		);

	metaThemeLight.setAttribute('name', 'theme-color');

	metaThemeLight.setAttribute('content', bgLight);

	document.head.appendChild(metaThemeLight);
}

/**
 * Adiciona os metas para o theme dark em smartphone.
 */
export function setThemeDarkSmartphone() {
	document.querySelectorAll('meta[name="theme-color"]')
		.forEach((meta) => {
			meta.remove();
		});

	const metaThemeDark = document.createElement('meta');

	const bgDark = getComputedStyle(document.documentElement)
		.getPropertyValue(
			'--bg-color-dark',
		);

	metaThemeDark.setAttribute('name', 'theme-color');

	metaThemeDark.setAttribute('content', bgDark);

	document.head.appendChild(metaThemeDark);
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
