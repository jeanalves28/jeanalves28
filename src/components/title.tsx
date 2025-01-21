import { useContext } from 'react';
import { contextTheme } from '../custom';
import { textColor } from '../utils';
import type { TitleProps } from '../types';

export default function Title({
	children,
	heading = 1,
	className = '',
}: TitleProps) {
	const { theme } = useContext(contextTheme);

	const borderColor =
		theme === 'system'
			? 'border-color-system'
			: theme === 'dark'
				? 'border-color-dark'
				: 'border-color-light';

	const classHeading1 = `select-none font-mPlusRounded1c text-4xl ${textColor(theme)}`;

	const classHeading2 = `select-none mb-1 font-mPlusRounded1c text-2xl ${textColor(
		theme,
	)} border-b-4 w-fit ${borderColor}`;

	if (heading === 2) return (
		<h2 className={`${classHeading2}${className.replace(/(.+)/, ' $1')}`}>
			{children}
		</h2>
	);

	return (
		<h1 className={`${classHeading1}${className.replace(/(.+)/, ' $1')}`}>
			{children}
		</h1>
	);
}
