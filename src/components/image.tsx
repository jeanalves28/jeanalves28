import { useContext } from 'react';
import { contextTheme } from '../custom';
import ImageNext from 'next/image';
import type { ImageComponentProps } from '../types';

export default function Image({
	src,
	srcDark,
	classImage,
	...props
}: ImageComponentProps) {
	const { theme } = useContext(contextTheme);
	const regex = /^[^/].+/;

	if (process.env.NODE_ENV === 'production') {
		src = `${process.env.NEXT_PUBLIC_BASE_PATH}${src.replace(regex, '/$&')}`;
	}

	if (srcDark && theme === 'system') {
		if (process.env.NODE_ENV === 'production') {
			srcDark = `${process.env.NEXT_PUBLIC_BASE_PATH}${srcDark.replace(regex, '/$&')}`;
		}

		return (
			<picture>
				<source srcSet={src} media="(prefers-color-scheme: light)" />
				<source srcSet={srcDark} media="(prefers-color-scheme: dark)" />
				<ImageNext src={src} className={classImage} {...props} />
			</picture>
		);
	}

	if (srcDark && theme === 'dark') {
		return <ImageNext src={srcDark} className={classImage} {...props} />;
	}

	return <ImageNext unoptimized src={src} className={classImage} {...props} />;
}
