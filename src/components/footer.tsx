'use client';

import { useContext } from 'react';
import { contextTheme } from '../custom';
import { bgColor, footerContent, textColor } from '../utils';
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
				{footerContent.map(({ alt, path, src, srcDark, height, width }, i) => (
					<Link
						key={`nav-${i + 1}-${alt.toLowerCase()}`}
						href={path}
						target="_blank"
					>
						<Image
							alt={alt}
							width={width}
							height={height}
							src={src}
							srcDark={srcDark}
						/>
					</Link>
				))}
			</div>
			<div className="flex items-center justify-center gap-x-1">
				<span className={`select-none text-xs ${textColor(theme)}`}>
					desenvolvido em
				</span>
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
