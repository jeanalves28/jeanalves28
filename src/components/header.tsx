'use client';

import { useContext } from 'react';
import {
	contextNavMenuDropBox,
	contextTheme,
	HeaderScrolling,
} from '../custom';
import { headerContent } from '../utils';
import Button from './button';
import ButtonTheme from './buttonTheme';
import Image from './image';
import Link from './link';
import MenuHeaderDropbox from './menuHeaderDropbox';
import { usePathname } from 'next/navigation';

export default function Header() {
	const { handlerMenuDropboxToggle } = useContext(contextNavMenuDropBox);
	const { theme, handlerMouseOverCloseMenuTheme } = useContext(contextTheme);
	const { headerRef } = HeaderScrolling();
	const path = usePathname();

	const titleTheme =
		theme === 'system'
			? 'title-header-theme-system'
			: theme === 'dark'
				? 'title-header-theme-dark'
				: 'title-header-theme-light';

	return (
		<header
			id="nav-header-fixed"
			ref={headerRef}
			className="fixed duration-500 transition-translate right-0 left-0 top-0 z-2 flex items-center pc:justify-center smartphone:justify-between gap-x-10 py-5 backdrop-blur-sm"
		>
			{headerContent(path)
				.map(({ title, path }, i) => (
					<Link
						key={`nav-${i + 1}-${title.toLowerCase()
							.replace(/\s/g, '-')}`}
						href={path}
						className={`title-header hidden pc:block ${titleTheme}`}
						scroll={false}
						target={/github/i.test(path) ? '_blank' : ''}
						onMouseOver={handlerMouseOverCloseMenuTheme}
					>
						{title}
					</Link>
				))}
			<div className="relative ml-5 block pc:hidden">
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
				<MenuHeaderDropbox />
			</div>
			<div className="relative flex items-center mr-9 pc:mr-0">
				<ButtonTheme />
			</div>
		</header>
	);
}
