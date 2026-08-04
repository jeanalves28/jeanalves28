'use client';

import { useEffect, useState } from 'react';
import { insertClassNavDropdown, removeClassNavDropdown } from '../../helpers';

export default function NavMenuDropBox() {
	const [isMenuDropBox, setIsMenuDropBox] = useState(false);
	const transitionInSec = 150;

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
		isMenuDropBox,
		handlerMenuDropboxToggle,
		handlerMenuDropboxClose,
		handlerSelectingNavigation,
	};
}
