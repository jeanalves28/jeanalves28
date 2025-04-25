'use client';

import { useContext } from 'react';
import { contextTheme } from '../custom';
import { headerContent } from '../utils';
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

	const titleTheme =
		theme === 'system'
			? 'title-header-theme-system'
			: theme === 'dark'
				? 'title-header-theme-dark'
				: 'title-header-theme-light';

	return (
		<header className="fixed left-0 right-0 top-0 z-2 flex items-center justify-center gap-x-10 pt-5 backdrop-blur-sm">
			{headerContent(usePathname())
				.map(({ title, path }, i) => (
					<Link
						key={`nav-${i + 1}-${title.toLowerCase()
							.replace(/\s/g, '-')}`}
						href={path}
						className={`title-header ${titleTheme}`}
						scroll={false}
						target={/github/i.test(path) ? '_blank' : undefined}
						onMouseOver={handlerMouseOverClose}
					>
						{title}
					</Link>
				))}
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
