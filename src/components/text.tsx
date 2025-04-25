import { useContext } from 'react';
import { contextTheme } from '../custom';
import { textColor } from '../utils';
import type { TextProps } from '../types';

export default function Text({ className = '', children }: TextProps) {
	const { theme } = useContext(contextTheme);

	return (
		<p
			className={`select-none text-pretty text-base ${textColor(
				theme,
			)} ${className.replace(/(.+)/, ' $1')}`}
		>
			{children}
		</p>
	);
}
