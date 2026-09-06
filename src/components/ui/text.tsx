import { useContext } from 'react';
import { contextTheme } from '@/custom';
import { textColor } from '@/utils';
import type { TextComponentProps } from '@/types';

export default function Text({
	className,
	children,
	type = 'p',
}: TextComponentProps) {
	const { theme } = useContext(contextTheme);

	const italicTextTheme =
		theme === 'system'
			? 'dark:bg-neutral-700 bg-mist-200'
			: theme === 'dark'
				? 'bg-neutral-700'
				: 'bg-mist-200';

	className = className ? ` ${className.trim()}` : '';

	if (typeof children === 'string' && children.includes('"')) {
		children = children.split(/"/g)
			.map((str, i) =>
				/^[\w-]+$/.test(str)
					? (
						<span
							key={`text-italic-${i + 1}`}
							className={`${italicTextTheme} italic rounded-xs pl-0.5 pr-1 pb-0.5`}
						>
							{str}
						</span>
					)
					: (
						str
					),
			);
	}

	if (type === 'span') {
		return (
			<span
				className={`${textColor(theme)}${className} select-none text-pretty`}
			>
				{children}
			</span>
		);
	}

	return (
		<p className={`${textColor(theme)}${className} select-none text-pretty`}>
			{children}
		</p>
	);
}
