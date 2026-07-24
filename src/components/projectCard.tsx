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
			className="w-full md:w-80 min-h-fit md:h-70 relative z-1 md:hover:z-50 rounded-lg"
		>
			<Link
				href={deployPath}
				target="_blank"
				className={`${bgContainer(theme, path)} group w-full md:hover:w-100 min-h-70 md:max-h-70 md:hover:max-h-200 relative md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:overflow-hidden transition-all duration-500 ease-out gap-10 flex flex-col pb-8 items-center rounded-lg md:hover:shadow-2xl`}
			>
				<Image
					src={src}
					alt={title}
					width={width}
					height={height}
					className="w-full h-28 max-md:h-full md:group-hover:h-52 md:group-hover:scale-[1.03] rounded-t-lg md:group-hover:rounded-lg object-cover shrink-0 transition-all duration-500 ease-out"
				/>
				<Title className="text-lg shrink-0">{title}</Title>
				<Text className="px-7 md:w-75 md:group-hover:w-95 shrink-0">
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
					className={`max-md:hidden absolute bottom-0 left-0 w-full h-24 bg-linear-to-t ${fromTheme} to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500 ease-out pointer-events-none rounded-b-lg`}
				/>
			</Link>
		</div>
	);
}
