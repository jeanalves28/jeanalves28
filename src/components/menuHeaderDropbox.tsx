import { useContext } from 'react';
import { contextNavMenuDropBox, contextTheme } from '../custom';
import { bgContainer, headerContent, textColor } from '../utils';
import Link from './link';
import { usePathname } from 'next/navigation';

export default function MenuHeaderDropbox() {
	const path = usePathname();

	const { isMenuDropBox, handlerSelectingNavigation, refNavMenuDropBox } =
		useContext(contextNavMenuDropBox);

	const { theme } = useContext(contextTheme);

	if (isMenuDropBox) {
		return (
			<ul
				id="nav-menu-dropdown"
				ref={refNavMenuDropBox}
				className={`nav-dropdown ${bgContainer(theme, 'nav-dropdown')}`}
			>
				{headerContent(path)
					.map(({ title, path }, i) => (
						<li
							key={`nav-${i + 1}-${title.toLowerCase()}`}
							className={`cursor-pointer duration-300 transition-bg-color ${textColor(theme, false)}`}
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

	return null;
}
