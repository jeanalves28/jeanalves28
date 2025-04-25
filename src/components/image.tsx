import ImageNext from 'next/image';
import { useContext } from 'react';
import { contextTheme } from '../custom';
import type { ImageProps } from '../types';

export default function Image({
	src,
	srcDark,
	alt,
	width,
	height,
	classImage,
}: ImageProps) {
	const { theme } = useContext(contextTheme);

	if (srcDark && theme === 'system') {
		return (
			<picture>
				<source srcSet={src} media="(prefers-color-scheme: light)" />
				<source srcSet={srcDark} media="(prefers-color-scheme: dark)" />
				<ImageNext
					src={src}
					alt={alt}
					width={width}
					height={height}
					className={classImage}
				/>
			</picture>
		);
	}

	if (srcDark && theme === 'dark') {
		return (
			<ImageNext
				src={srcDark}
				alt={alt}
				width={width}
				height={height}
				className={classImage}
			/>
		);
	}

	return (
		<ImageNext
			src={src}
			alt={alt}
			width={width}
			height={height}
			className={classImage}
		/>
	);
}
