'use client';

import { useContext } from 'react';
import {
	contextNavMenuDropBox,
	contextTheme,
	RadialColorStalking,
} from '../custom';
import { bgContainer } from '../utils';
import Image from './image';
import Link from './link';
import Text from './text';
import Title from './title';
import { usePathname } from 'next/navigation';
import type { ProjectCardProps } from '../types';

export default function ProjectCard(cardProps: ProjectCardProps) {
	const { theme, handlerMouseOverCloseMenuTheme } = useContext(contextTheme);
	const { handlerMenuDropboxClose } = useContext(contextNavMenuDropBox);

	const { refAnchorRadialStalking, handlerRadialColorMove } =
		RadialColorStalking();

	const path = usePathname();

	return (
		<div
			onMouseOver={() => {
				handlerMouseOverCloseMenuTheme();

				handlerMenuDropboxClose();
			}}
			className="w-full pc:w-80 min-h-fit pc:h-70 relative z-1 pc:hover:z-50 rounded-lg"
		>
			<Link
				ref={refAnchorRadialStalking}
				onMouseMove={handlerRadialColorMove}
				href={{
					pathname: `/projects/${cardProps.id}`,
					query: { card: JSON.stringify(cardProps) },
				}}
				className={`${bgContainer(theme, path, 'from-color-card')} group w-full pc:hover:w-100 min-h-70 pc:max-h-70 pc:hover:max-h-200 pc:absolute pc:top-1/2 pc:left-1/2 pc:-translate-x-1/2 pc:-translate-y-1/2 pc:overflow-hidden transition-card ease-out duration-500 gap-y-6 pc:gap-y-10 flex flex-col pb-10 pc:pb-5 items-center rounded-lg pc:shadow-md pc:hover:shadow-2xl max-pc:shadow-lg pc:hover:bg-radial-[circle_at_var(--rect-x)_var(--rect-y)] pc:to-80%`}
			>
				<Image
					src={cardProps.imagePreview.src}
					alt={cardProps.title}
					width={cardProps.imagePreview.width}
					height={cardProps.imagePreview.height}
					quality={75}
					className="max-pc:w-full pc:h-28 h-45 pc:group-hover:h-55 rounded-t-lg pc:group-hover:scale-102 object-cover transition-card ease-out duration-500"
				/>
				<Title className="text-xl">{cardProps.title}</Title>
				<Text
					type="span"
					className="px-7 pc:w-80 pc:group-hover:w-95 transition-card ease-out duration-500 shrink-0"
				>
					{cardProps.description}
				</Text>
				<div
					className={`max-pc:hidden absolute bottom-0 left-0 w-full h-24 bg-linear-to-t ${bgContainer(
						theme,
						'from-linear-transparent-bottom',
					)} to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500 ease-out pointer-events-none rounded-b-lg`}
				/>
			</Link>
		</div>
	);
}
