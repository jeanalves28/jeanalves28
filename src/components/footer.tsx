'use client';

import { useContext } from 'react';
import { contextTheme } from '../custom';
import { bgColor, textColor } from '../utils';
import Image from './image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
	const { theme } = useContext(contextTheme);

	return (
		<footer
			className={`relative z-1 flex h-48 w-full flex-col justify-end gap-y-4 transition-bg duration-200 ${bgColor(theme, usePathname())}`}
		>
			<div className="flex w-full justify-center gap-x-12">
				<Link href="https://www.github.com/jeanalves28" target="_blank">
					<Image
						alt="Github"
						width="26"
						height="100"
						src="github.svg"
						srcDark="github_dark.svg"
					/>
				</Link>
				<Link href="https://www.linkedin.com/in/jean-alves27" target="_blank">
					<Image
						alt="LinkedIn"
						width="30"
						height="100"
						src="linkedin.svg"
						srcDark="linkedin_dark.svg"
					/>
				</Link>
				<Link href="mailto:j_alves_19@hotmail.com" target="_blank">
					<Image
						alt="Outlook"
						width="30"
						height="100"
						src="outlook.svg"
						srcDark="outlook_dark.svg"
					/>
				</Link>
			</div>
			<div className="flex items-center justify-center gap-x-1">
				<span className={`text-xs ${textColor(theme)}`}>desenvolvido em</span>
				<Image
					src="nextjs-banner-light.svg"
					srcDark="nextjs-banner-dark.svg"
					width="60"
					height="100"
					alt="banner nextjs"
				/>
			</div>
		</footer>
	);
}
