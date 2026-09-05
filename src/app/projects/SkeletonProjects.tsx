'use client';

import { useContext } from 'react';
import { contextTheme } from '../../custom';
import { listRepositories } from '../../repositories';
import { bgContainer } from '../../utils';
import ContainerProjectCard from './containerProjectCard';
import { usePathname } from 'next/navigation';

export default function Loading() {
	const { theme } = useContext(contextTheme);
	const path = usePathname();

	return (
		<ContainerProjectCard>
			{listRepositories.map(({ title, description }, i) => (
				<div
					key={`card-loading-${i + 1}`}
					className={`${bgContainer(theme, path)} w-full pc:w-80 min-h-fit pc:h-70 relative z-1 rounded-lg pc:shadow-md max-pc:shadow-lg`}
				>
					<div className="animate-pulse pb-10 pc:pb-0 gap-y-6 pc:gap-y-10 flex flex-col items-center rounded-lg">
						<div
							className={`${bgContainer(theme, 'loading')} w-full rounded-t-lg h-45 pc:h-28`}
						/>
						<div
							className={`${bgContainer(theme, 'loading')} text-lg h-fit w-fit rounded-full text-transparent`}
						>
							{title}
						</div>
						<span
							className={`${bgContainer(theme, 'loading')} font-normal text-pretty w-9/10 pc:w-85/100 h-max pc:h-12 rounded-xl text-transparent`}
						>
							{description?.replace(/"/g, '')}
						</span>
					</div>
				</div>
			))}
		</ContainerProjectCard>
	);
}
