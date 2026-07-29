'use client';

import { useContext } from 'react';
import { contextNavMenuDropBox, contextTheme } from '../custom';
import { bgContainer } from '../utils';
import Image from './image';
import Link from './link';
import Text from './text';
import Title from './title';
import { usePathname } from 'next/navigation';
import type { ProjectCardProps } from '../types';

export default function ProjectCard({
	deployPath,
	title,
	imagePreview: { src, height, width },
	description,
}: ProjectCardProps) {
	const { theme, handlerMouseOverCloseMenuTheme } = useContext(contextTheme);
	const { handlerMenuDropboxClose } = useContext(contextNavMenuDropBox);
	const path = usePathname();

	const fromTheme =
		theme === 'system'
			? 'from-neutral-50 dark:from-black-card'
			: theme === 'light'
				? 'from-neutral-50'
				: 'from-black-card';

	const italicTextTheme =
		theme === 'system'
			? 'dark:bg-neutral-700 bg-mist-200'
			: theme === 'dark'
				? 'bg-neutral-700'
				: 'bg-mist-200';

	return (
		<div
			onMouseOver={() => {
				handlerMouseOverCloseMenuTheme();

				handlerMenuDropboxClose();
			}}
			className="w-full pc:w-80 min-h-fit pc:h-70 relative z-1 pc:hover:z-50 rounded-lg"
		>
			<Link
				href={deployPath}
				target="_blank"
				className={`${bgContainer(theme, path)} group w-full pc:hover:w-100 min-h-70 pc:max-h-70 pc:hover:max-h-200 pc:absolute pc:top-1/2 pc:left-1/2 pc:-translate-x-1/2 pc:-translate-y-1/2 pc:overflow-hidden transition-card ease-out duration-700 gap-y-6 pc:gap-y-10 flex flex-col pb-10 pc:pb-5 items-center rounded-lg pc:shadow-md pc:hover:shadow-2xl max-pc:shadow-lg`}
			>
				<Image
					src={src}
					alt={title}
					width={width}
					height={height}
					quality={75}
					className="max-pc:w-full pc:h-28 h-45 pc:group-hover:h-55 rounded-t-lg pc:group-hover:scale-102 object-cover transition-card ease-out duration-700"
				/>
				<Title className="text-lg shrink-0">{title}</Title>
				<Text
					type="span"
					className="px-7 pc:w-80 pc:group-hover:w-95 transition-card ease-out duration-700 shrink-0"
				>
					{description
						? description.split(/"/g)
							.map((str, i) =>
								/^\w+$/.test(str)
									? (
										<em
											key={`text-italic-${i + 1}`}
											className={`${italicTextTheme} rounded-xs px-1`}
										>
											{str}
										</em>
									)
									: (
										str
									),
							)
						: ''}
				</Text>
				<div
					className={`max-pc:hidden absolute bottom-0 left-0 w-full h-24 bg-linear-to-t ${fromTheme} to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500 ease-out pointer-events-none rounded-b-lg`}
				/>
			</Link>
		</div>
	);
}
