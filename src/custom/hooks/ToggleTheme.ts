import { useEffect, useRef, useState } from 'react';
import {
	insertColorBtnThemeActivated,
	removeColorBtnThemeActivated,
	setThemeDarkSmartphone,
	setThemeLightSmartphone,
	setThemeSystemSmartphone,
} from '../../helpers';
import type { EventParam, ToggleTheme } from '../../types';

export default function ToggleTheme() {
	const [theme, setTheme] = useState<ToggleTheme>('system');
	const [isSelectingTheme, setSelectingTheme] = useState(false);
	const [imageTheme, setImageTheme] = useState('system');
	const [isDisabledBtnTheme, setDisabledBtnTheme] = useState(false);
	const refMenuTheme = useRef({} as HTMLUListElement);
	const transitionInSec = 150;
	const fadingInSec = 150;

	useEffect(() => {
		setThemeSystemSmartphone();
	}, []);

	useEffect(() => {
		if (isSelectingTheme) {
			refMenuTheme.current.classList.add('animate-translate-open');

			insertColorBtnThemeActivated(theme);

			setTimeout(
				() => refMenuTheme.current.classList.remove('animate-translate-open'),
				transitionInSec,
			);
		} else {
			removeColorBtnThemeActivated(theme);
		}
	}, [isSelectingTheme]);

	function handlerMouseOverCloseMenuTheme() {
		if (isSelectingTheme) {
			setDisabledBtnTheme(true);

			refMenuTheme.current.classList.add('animate-translate-close');

			setTimeout(() => {
				setSelectingTheme(false);

				setDisabledBtnTheme(false);
			}, transitionInSec);
		}
	}

	function handlerMenuToggle() {
		if (isSelectingTheme) handlerMouseOverCloseMenuTheme();
		else setSelectingTheme(true);

		if ('vibrate' in navigator) navigator.vibrate(50);
	}

	function handlerClickToggle({ currentTarget }: EventParam): void {
		switch (currentTarget.textContent.toLowerCase()) {
			case 'claro':
				setTheme('light');

				setImageTheme('sun');

				setThemeLightSmartphone();
				break;

			case 'escuro':
				setTheme('dark');

				setImageTheme('moon');

				setThemeDarkSmartphone();
				break;

			default:
				setTheme('system');

				setImageTheme('system');

				setThemeSystemSmartphone();
		}

		setDisabledBtnTheme(true);

		refMenuTheme.current.classList.add('animate-fading-close');

		setTimeout(() => {
			setSelectingTheme(false);

			setDisabledBtnTheme(false);
		}, fadingInSec);
	}

	return {
		theme,
		imageTheme,
		isSelectingTheme,
		isDisabledBtnTheme,
		setTheme,
		refMenuTheme,
		handlerMenuToggle,
		handlerClickToggle,
		handlerMouseOverCloseMenuTheme,
	};
}
