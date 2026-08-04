'use client';

import { useContext } from 'react';
import { contextTheme } from '../custom';
import ImageNext from 'next/image';
import type { ImageComponentProps } from '../types';

export default function Image({ src, srcDark, ...props }: ImageComponentProps) {
	const { theme } = useContext(contextTheme);

	if (srcDark && theme === 'system') {
		return (
			<picture>
				<source srcSet={src as string} media="(prefers-color-scheme: light)" />
				<source srcSet={srcDark} media="(prefers-color-scheme: dark)" />
				<ImageNext src={src} {...props} />
			</picture>
		);
	}

	if (srcDark && theme === 'dark') {
		return <ImageNext src={srcDark} {...props} />;
	}

	return <ImageNext src={src} {...props} />;
}
