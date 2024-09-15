'use client';

import { useContext } from 'react';
import { contextTheme } from '../custom';
import { pathHeader } from '../utils';
import Button from './button';
import Image from './image';
import MenuSelectTheme from './menuSelectTheme';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
	const {
		theme,
		imageTheme,
		isSelectingTheme,
		handlerMenuToggle,
		handlerMouseOverClose,
	} = useContext(contextTheme);

	const { title1, title2, path1, path2 } = pathHeader(usePathname());

	const titleTheme =
		theme === 'system'
			? 'title-header-theme-system'
			: theme === 'dark'
				? 'title-header-theme-dark'
				: 'title-header-theme-light';

	return (
		<header className="fixed left-0 right-0 top-0 z-2 flex items-center justify-center gap-x-10 pt-5 backdrop-blur-sm">
			<Link href={path1} scroll={false} onMouseOver={handlerMouseOverClose}>
				<nav className={`title-header ${titleTheme}`}>{title1}</nav>
			</Link>
			<Link href={path2} scroll={false} onMouseOver={handlerMouseOverClose}>
				<nav className={`title-header ${titleTheme}`}>{title2}</nav>
			</Link>
			<Link
				href="https://github.com/jeanalves28/jeanalves28"
				target="_blank"
				scroll={false}
				onMouseOver={handlerMouseOverClose}
			>
				<nav className={`title-header ${titleTheme}`}>
					Código fonte do Portfolio
				</nav>
			</Link>
			<div className="relative flex items-center">
				<Button
					classButton={`${
						theme === 'system'
							? 'btn-system-theme '
							: theme === 'dark'
								? 'btn-forced-dark '
								: 'btn-forced-light '
					}${
						isSelectingTheme
							? `${
								theme === 'system'
									? 'btn-actived-theme-system'
									: theme === 'dark'
										? 'btn-actived-theme-dark'
										: 'btn-actived-theme-light'
							}`
							: 'btn-deactivated'
					}`}
					onClick={handlerMenuToggle}
				>
					<Image
						src={`${imageTheme}_light.svg`}
						srcDark={`${imageTheme}_dark.svg`}
						alt="icon theme"
						height="100"
						width="100"
						classImage="w-9"
					/>
				</Button>
				{isSelectingTheme && <MenuSelectTheme />}
			</div>
		</header>
	);
}
