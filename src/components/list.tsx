import { useContext } from 'react';
import { contextTheme } from '../custom';
import { textColor } from '../utils';
import Image from './image';
import type { ListComponentProps } from '../types';

export default function List({
	arrayNames,
	classList,
	classItems,
}: ListComponentProps) {
	const { theme } = useContext(contextTheme);

	classItems = classItems ? ` ${classItems}` : '';

	classList = classList ? ` ${classList}` : '';

	classItems = `${textColor(theme)} text-pretty${classItems}`;

	return (
		<ul className={`select-none${classList}`}>
			{typeof arrayNames === 'string'
				? arrayNames
				: arrayNames.map((content, i) => {
					if (Array.isArray(content)) {
						return (
							<li className={classItems} key={`list-${i + 1}`}>
								<Image
									src={content[0]}
									alt={content[1]}
									width={20}
									height={20}
								/>
								{content[1]}
							</li>
						);
					}

					return (
						<li className={classItems} key={`list-${i + 1}`}>
							{content}
						</li>
					);
				})}
		</ul>
	);
}
