import NextLink from 'next/link';
import type { LinkComponentProps } from '../types';

export default function Link({
	href,
	children,
	target = '',
	scroll = true,
	...props
}: LinkComponentProps) {
	if (
		/^(https?:\/\/)?(www\.?)?([\w-]+\.(com|br|gov))?/i.test(href.trim()) &&
		target.length
	) {
		return (
			<a href={href} target={target} rel="noopener noreferrer" {...props}>
				{children}
			</a>
		);
	}

	return (
		<NextLink href={href} scroll={scroll} {...props}>
			{children}
		</NextLink>
	);
}
