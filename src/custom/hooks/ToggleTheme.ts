import { useEffect, useState } from 'react';
import { insertClassMenuTheme, removeClassMenuTheme } from '../../helpers';
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

			setTimeout(
				() => removeClassMenuTheme('animate-translate-open'),
				transitionInSec,
			);
		}
	}, [isSelectingTheme]);

	useEffect(() => {
		insertClassMenuTheme('animate-fading-close');
	}, [imageTheme]);

	function handlerMouseOverClose() {
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
		if (isSelectingTheme) handlerMouseOverClose();
		else setSelectingTheme(true);
	}

	function handlerClickToggle({ currentTarget }: EventParamsClick): void {
		switch (currentTarget.textContent!.toLowerCase()) {
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

	function handlerHoverTheme({ currentTarget }: EventParamsClick): void {
		switch (theme) {
			case 'light':
				currentTarget.classList.toggle('bg-neutral-100');
				break;

			case 'dark':
				currentTarget.classList.toggle('bg-neutral-600');
				break;

			default:
				currentTarget.classList.toggle('bg-neutral-100');

				currentTarget.classList.toggle('dark:bg-neutral-600');
		}
	}

	return {
		theme,
		imageTheme,
		isSelectingTheme,
		isDisabledBtnTheme,
		setTheme,
		handlerMenuToggle,
		handlerClickToggle,
		handlerHoverTheme,
		handlerMouseOverClose,
	};
}
