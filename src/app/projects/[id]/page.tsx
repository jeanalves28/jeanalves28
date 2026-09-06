'use client';

import { useContext } from 'react';
import {
	Background,
	Button,
	Footer,
	Header,
	Image,
	Link,
	Text,
	Title,
} from '@/components';
import { contextTheme, RadialColorStalking } from '@/custom';
import { bgContainer } from '@/utils';
import { usePathname, useSearchParams } from 'next/navigation';
import type { ProjectCardProps } from '@/types';

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
						className="w-full object-cover rounded-t-lg max-h-60"
						src={src}
						alt={title}
						width={width}
						height={height}
					/>
					<Title className="text-xl">{title}</Title>
					<Text className="px-7 text-base">{description}</Text>
					<Link
						className="relative z-1 text-lg transition-bg-color ease-linear duration-200 md:w-2/5 w-1/2 h-9 rounded-r-full rounded-l-full"
						href={deployPath}
						target="_blank"
					>
						<Button className="pc:hover:bg-sky-400 pc:hover:text-slate-800 pc:bg-transparent pc:border-sky-400 pc:text-sky-400 border bg-sky-400 pc:duration-150 pc:transition-btn-outline pc:ease-in-out text-black border-sky-400 rounded-l-full! rounded-r-full! h-full w-full cursor-pointer">
							Site
						</Button>
					</Link>
				</div>
			</div>
			<Footer />
		</section>
	);
}
