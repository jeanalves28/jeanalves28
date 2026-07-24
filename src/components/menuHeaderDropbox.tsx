import { useContext } from 'react';
import { contextNavMenuDropBox, contextTheme } from '../custom';
import { headerContent, textColor } from '../utils';
import Link from './link';
import { usePathname } from 'next/navigation';

export default function MenuHeaderDropbox() {
	const path = usePathname();
	const { handlerSelectingNavigation } = useContext(contextNavMenuDropBox);
	const { theme } = useContext(contextTheme);

	const bgColor =
		theme === 'system'
			? 'bg-white dark:bg-black-card dark:border-neutral-600 border-slate-300'
			: theme === 'dark'
				? 'bg-black-card border-neutral-600'
				: 'bg-white  border-slate-300';

	const hoverBgContainer =
		theme === 'system'
			? 'hover:bg-neutral-200 dark:hover:bg-neutral-600'
			: theme === 'dark'
				? 'hover:bg-neutral-600'
				: 'hover:bg-neutral-200';

	return (
		<ul id="nav-menu-dropdown" className={`nav-dropdown ${bgColor}`}>
			{headerContent(path)
				.map(({ title, path }, i) => (
					<li
						key={`nav-${i + 1}-${title.toLowerCase()}`}
						className={`cursor-pointer ${hoverBgContainer} duration-300 transition-bg-color ${textColor(theme, false)}`}
					>
						<Link
							className="block w-full h-full text-start p-2.5"
							href={path}
							target={/github/i.test(path) ? '_blank' : ''}
							onClick={handlerSelectingNavigation}
						>
							{title}
						</Link>
					</li>
				))}
		</ul>
	);
}
