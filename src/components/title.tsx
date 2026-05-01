import { useContext } from 'react';
import { contextTheme } from '../custom';
import { textColor } from '../utils';
import type { TitleComponentProps } from '../types';

export default function Title({
	children,
	className,
	heading = 1,
}: TitleComponentProps) {
	const { theme } = useContext(contextTheme);

	className = className ? ` ${className}` : '';

	const borderTheme =
		theme === 'system'
			? 'border-color-system'
			: theme === 'dark'
				? 'border-color-dark'
				: 'border-color-light';

	const toggleTheme = `${textColor(theme)} ${borderTheme}`;

	const classHeading1 = `${toggleTheme} font-bold select-none font-mPlusRounded1c text-4xl`;

	const classHeading2 = `${toggleTheme} font-bold select-none font-mPlusRounded1c text-2xl border-b-4`;

	if (heading === 2) {
		return <h2 className={`${classHeading2}${className}`}>{children}</h2>;
	}

	return <h1 className={`${classHeading1}${className}`}>{children}</h1>;
}
