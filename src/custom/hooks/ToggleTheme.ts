import { useEffect, useState } from 'react';
import {
	insertClassMenuTheme,
	insertColorBtnThemeActivated,
	removeClassMenuTheme,
	removeColorBtnThemeActivated,
} from '../../helpers';
import type { EventParamsClick, ToggleTheme } from '../../types';

export default function ToggleTheme() {
	const [theme, setTheme] = useState<ToggleTheme>('system');
	const [isSelectingTheme, setSelectingTheme] = useState(false);
	const [imageTheme, setImageTheme] = useState('system');
	const [isDisabledBtnTheme, setDisabledBtnTheme] = useState(false);
	const transitionInSec = 150;
	const fadingInSec = 150;

	useEffect(() => {

		if (isSelectingTheme) {
			insertClassMenuTheme('animate-translate-open');

			insertColorBtnThemeActivated(theme);

			setTimeout(
				() => removeClassMenuTheme('animate-translate-open'),
				transitionInSec,
			);
		} else {
			removeColorBtnThemeActivated(theme);
		}
	}, [isSelectingTheme, theme]);

	useEffect(() => {
		insertClassMenuTheme('animate-fading-close');
	}, [imageTheme]);

	function handlerMouseOverCloseMenuTheme() {
		if (isSelectingTheme) {
			setDisabledBtnTheme(true);

			insertClassMenuTheme('animate-translate-close');

			setTimeout(() => {
				setSelectingTheme(false);

				setDisabledBtnTheme(false);
			}, transitionInSec);
		}
	}

	function handlerMenuToggle() {
		if (isSelectingTheme) handlerMouseOverCloseMenuTheme();
		else setSelectingTheme(true);
	}

	function handlerClickToggle({ currentTarget }: EventParamsClick): void {
		switch (currentTarget.textContent.toLowerCase()) {
			case 'claro':
				setTheme('light');

				setImageTheme('sun');
				break;

			case 'escuro':
				setTheme('dark');

				setImageTheme('moon');
				break;

			default:
				setTheme('system');

				setImageTheme('system');
		}

		setDisabledBtnTheme(true);

		insertClassMenuTheme('animate-fading-close');

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
		handlerMenuToggle,
		handlerClickToggle,
		handlerMouseOverCloseMenuTheme,
	};
}
