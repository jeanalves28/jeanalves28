'use client';

import { useContext } from 'react';
import {
	Background,
	Footer,
	Header,
	Image,
	Link,
	Text,
	Title,
} from '../../../components';
import { contextTheme, RadialColorStalking } from '../../../custom';
import { bgContainer } from '../../../utils';
import { usePathname, useSearchParams } from 'next/navigation';
import type { ProjectCardProps } from '../../../types';

export default function Card() {
	const props = useSearchParams();
	const path = usePathname();

	const {
		refDivRadialStalking,
		handlerRadialColorMove,
		handlerRadialColorLeave,
		handlerRadialColorEnter,
	} = RadialColorStalking();

	const { theme } = useContext(contextTheme);

	const {
		title,
		description,
		deployPath,
		imagePreview: { src, width, height },
	}: ProjectCardProps = JSON.parse(props.get('card')!);

	return (
		<section className="relative min-h-dvh pt-30 flex flex-col items-center justify-end">
			<Background />
			<Header />
			<div
				className={`${bgContainer(theme, path)} w-93/100 tablet:w-120 rounded-lg relative z-1`}
				onMouseLeave={handlerRadialColorLeave}
				onMouseEnter={handlerRadialColorEnter}
			>
				<div className="relative gap-y-8 border-b border-r border-inherit rounded-lg pb-4 flex flex-col items-center">
					<div
						ref={refDivRadialStalking}
						onMouseMove={handlerRadialColorMove}
						className={`${bgContainer(theme, 'from-color-card')} absolute max-pc:hidden inset-0 bg-radial-[circle_at_var(--rect-x)_var(--rect-y)] to-80% opacity-0 transition-opacity ease-linear duration-300`}
					/>
					<Image
						className="relative z-1 w-full object-cover rounded-t-lg max-h-60"
						src={src}
						alt={title}
						width={width}
						height={height}
					/>
					<Title className="text-xl">{title}</Title>
					<Text className="px-7 text-base">{description}</Text>
					<Text className="border-t border-inherit w-full text-center pt-3">
						<Link
							className={`${bgContainer(theme, 'link-site')} relative z-1 text-lg underline underline-offset-3 px-2.5 py-1 rounded-xl transition-bg-color ease-linear duration-200`}
							href={deployPath}
							target="_blank"
						>
							site
						</Link>
					</Text>
				</div>
			</div>
			<Footer />
		</section>
	);
}
