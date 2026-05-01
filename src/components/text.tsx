import { useContext } from 'react';
import { contextTheme } from '../custom';
import { textColor } from '../utils';
import type { TextComponentProps } from '../types';

export default function Text({ className, children }: TextComponentProps) {
	const { theme } = useContext(contextTheme);

	className = className ? ` ${className}` : '';

	return (
		<p
			className={`${textColor(theme)} select-none font-normal text-pretty${className}`}
		>
			{children}
		</p>
	);
}
