'use client';

import { useEffect, useRef, useState } from 'react';

export default function NavMenuDropBox() {
	const [isMenuDropBox, setIsMenuDropBox] = useState(false);
	const refNavMenuDropBox = useRef({} as HTMLUListElement);
	const transitionInSec = 150;

	useEffect(() => {
		if (isMenuDropBox) {
			refNavMenuDropBox.current.classList.add('animate-diagonal-open');

			setTimeout(
				() =>
					refNavMenuDropBox.current.classList.remove('animate-diagonal-open'),
				transitionInSec,
			);
		}
	}, [isMenuDropBox]);

	function handlerMenuDropboxClose() {
		if (isMenuDropBox) {
			refNavMenuDropBox.current.classList.add('animate-diagonal-close');

			setTimeout(() => setIsMenuDropBox(false), transitionInSec);
		}
	}

	function handlerSelectingNavigation() {
		refNavMenuDropBox.current.classList.add('animate-fading-close');

		setTimeout(() => setIsMenuDropBox(false), transitionInSec);
	}

	function handlerMenuDropboxToggle() {
		if (isMenuDropBox) handlerMenuDropboxClose();
		else setIsMenuDropBox(true);

		if ('vibrate' in navigator) navigator.vibrate(50);
	}

	return {
		isMenuDropBox,
		refNavMenuDropBox,
		handlerMenuDropboxToggle,
		handlerMenuDropboxClose,
		handlerSelectingNavigation,
	};
}
