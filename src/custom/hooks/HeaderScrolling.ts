'use client';

import { useContext, useEffect, useRef, useState } from 'react';
import { contextNavMenuDropBox } from '../contexts/contextNavMenuDropBox';
import { contextTheme } from '../contexts/contextTheme';

export default function HeaderScrolling() {
	const { handlerMouseOverCloseMenuTheme } = useContext(contextTheme);
	const { handlerMenuDropboxClose } = useContext(contextNavMenuDropBox);
	const [currentScrollY, setCurrentScrollY] = useState(0);
	const headerRef = useRef({} as HTMLElement);
	const lastScrollY = useRef(0);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			setCurrentScrollY(window.scrollY);
		});
	}, []);

	useEffect(() => {
		const header = document.querySelector('#nav-header-fixed');

		if (header && lastScrollY.current < currentScrollY) {
			headerRef.current.classList.add('-translate-y-full');

			lastScrollY.current = currentScrollY;

			handlerMouseOverCloseMenuTheme();

			handlerMenuDropboxClose();
		} else if (header && lastScrollY.current > currentScrollY) {
			headerRef.current.classList.remove('-translate-y-full');

			lastScrollY.current = currentScrollY;
		}
	}, [currentScrollY]);

	return {
		headerRef,
	};
}
