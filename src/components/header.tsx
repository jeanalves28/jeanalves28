'use client';

import { useContext, useEffect, useRef, useState } from 'react';
import { contextNavMenuDropBox, contextTheme } from '../custom';
import { headerContent } from '../utils';
import Button from './button';
import ButtonTheme from './buttonTheme';
import Image from './image';
import Link from './link';
import MenuHeaderDropbox from './menuHeaderDropbox';
import { usePathname } from 'next/navigation';

export default function Header() {
	const path = usePathname();
	const [currentScrollY, setCurrentScrollY] = useState(0);
	const lastScrollY = useRef(0);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			setCurrentScrollY(window.scrollY);
		});
	}, []);

	useEffect(() => {
		const header = document.querySelector('#nav-header-fixed');

		if (header && lastScrollY.current < currentScrollY) {
			header.classList.add('-translate-y-full');

			lastScrollY.current = currentScrollY;
		} else if (header && lastScrollY.current > currentScrollY) {
			header.classList.remove('-translate-y-full');

			lastScrollY.current = currentScrollY;
		}
	}, [currentScrollY]);

	const { widthScreen, isMenuDropBox, handlerMenuDropboxToggle } = useContext(
		contextNavMenuDropBox,
	);

	const { theme, handlerMouseOverCloseMenuTheme } = useContext(contextTheme);

	const titleTheme =
		theme === 'system'
			? 'title-header-theme-system'
			: theme === 'dark'
				? 'title-header-theme-dark'
				: 'title-header-theme-light';

	if (widthScreen === null) {
		return (
			<header className="fixed left-0 right-0 top-0 z-2 h-40 py-5 px-3">
				<div className="h-10 w-full bg-gray-200 animate-pulse rounded-md"></div>
			</header>
		);
	}

	return (
		<header
			id="nav-header-fixed"
			className="fixed duration-500 transition-translate right-0 left-0 top-0 z-2 flex items-center md:justify-center smartphone:justify-between gap-x-10 py-5 backdrop-blur-sm"
		>
			{widthScreen
				? (
					headerContent(path)
						.map(({ title, path }, i) => (
							<Link
								key={`nav-${i + 1}-${title.toLowerCase()
									.replace(/\s/g, '-')}`}
								href={path}
								className={`title-header smartphone:hidden md:block ${titleTheme}`}
								scroll={false}
								target={/github/i.test(path) ? '_blank' : ''}
								onMouseOver={handlerMouseOverCloseMenuTheme}
							>
								{title}
							</Link>
						))
				)
				: (
					<div className="relative ml-5">
						<Button
							className="p-2"
							onClick={handlerMenuDropboxToggle}
							onMouseOver={handlerMouseOverCloseMenuTheme}
						>
							<Image
								src="menu_dropdown_dark.svg"
								srcDark="menu_dropdown_light.svg"
								className="w-8 select-none pointer-events-none"
								alt="menu dropdown"
								width="100"
								height="100"
							/>
						</Button>
						{isMenuDropBox && <MenuHeaderDropbox />}
					</div>
				)}
			<div className="relative flex items-center smartphone:mr-9 md:mr-0">
				<ButtonTheme />
			</div>
		</header>
	);
}
