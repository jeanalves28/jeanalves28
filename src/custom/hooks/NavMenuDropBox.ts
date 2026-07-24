'use client';

import { useEffect, useState } from 'react';
import { insertClassNavDropdown, removeClassNavDropdown } from '../../helpers';

export default function NavMenuDropBox() {
	const [widthScreen, setWidthScreen] = useState<null | boolean>(null);
	const [isMenuDropBox, setIsMenuDropBox] = useState(false);
	const transitionInSec = 150;

	useEffect(() => {
		const media = window.matchMedia('(min-width: 875px)');

		setWidthScreen(media.matches);

		function listenerMedia({ matches }: MediaQueryListEvent) {
			setWidthScreen(matches);
		}

		media.addEventListener('change', listenerMedia);

		return () => media.removeEventListener('change', listenerMedia);
	}, []);

	useEffect(() => {
		if (isMenuDropBox) {
			insertClassNavDropdown('animate-diagonal-open');

			setTimeout(() => {
				removeClassNavDropdown('animate-diagonal-open');
			}, transitionInSec);
		}
	}, [isMenuDropBox]);

	function handlerMenuDropboxClose() {
		if (isMenuDropBox) {
			insertClassNavDropdown('animate-diagonal-close');

			setTimeout(() => {
				removeClassNavDropdown('animate-diagonal-close');

				setIsMenuDropBox(false);
			}, transitionInSec);
		}
	}

	function handlerSelectingNavigation() {
		insertClassNavDropdown('animate-fading-close');

		setTimeout(() => {
			removeClassNavDropdown('animate-fading-close');

			setIsMenuDropBox(false);
		}, transitionInSec);
	}

	function handlerMenuDropboxToggle() {
		if (isMenuDropBox) handlerMenuDropboxClose();
		else setIsMenuDropBox(true);
	}

	return {
		widthScreen,
		isMenuDropBox,
		handlerMenuDropboxToggle,
		handlerMenuDropboxClose,
		handlerSelectingNavigation,
	};
}
