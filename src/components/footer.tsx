'use client';

import { useContext } from 'react';
import { contextTheme } from '../custom';
import { footerContent, textColor } from '../utils';
import Image from './image';
import Link from './link';

export default function Footer() {
	const { theme } = useContext(contextTheme);

	return (
		<footer
			className="flex h-70 w-full flex-col justify-end gap-y-4 duration-200 pb-[env(safe-area-inset-bottom)]"
		>
			<div className="flex w-full justify-center gap-x-12">
				{footerContent.map(({ alt, path, src, srcDark, height, width }, i) => (
					<Link
						key={`nav-${i + 1}-${alt.toLowerCase()}`}
						href={path}
						target="_blank"
						className="relative"
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
			<div className="flex items-center justify-center gap-x-1 relative">
				<span className={`select-none text-xs ${textColor(theme)}`}>
					desenvolvido em
				</span>
				<Image
					src="/nextjs-banner-light.svg"
					srcDark="/nextjs-banner-dark.svg"
					width={60}
					height={60}
					alt="banner nextjs"
				/>
			</div>
		</footer>
	);
}
