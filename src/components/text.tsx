import { useContext } from 'react';
import { contextTheme } from '../custom';
import { textColor } from '../utils';
import type { TextComponentProps } from '../types';

export default function Text({
	className,
	children,
	type = 'p',
}: TextComponentProps) {
	const { theme } = useContext(contextTheme);

	className = className ? ` ${className.trim()}` : '';

	if (type === 'span') {
		return (
			<span
				className={`${textColor(theme)}${className} select-none font-normal text-pretty`}
			>
				{children}
			</span>
		);
	}

	return (
		<p
			className={`${textColor(theme)}${className} select-none font-normal text-pretty`}
		>
			{children}
		</p>
	);
}
