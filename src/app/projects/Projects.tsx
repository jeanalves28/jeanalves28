'use client';

import { useContext } from 'react';
import { Footer, Header, ProjectCard, Title } from '../../components';
import { contextTheme } from '../../custom';
import { bgColor } from '../../utils';
import type { ProjectProps } from '../../types';

export default function Projects({ listRepositories }: ProjectProps) {
	const { theme } = useContext(contextTheme);

	return (
		<div className={`bg-wallpaper-main ${bgColor(theme)}`}>
			<Header />
			<main className="pt-30 min-h-screen">
				<Title className="text-center">Projetos</Title>
				<div className="px-5 sm:px-10 md:px-[8%] flex flex-col md:flex-row md:flex-wrap xl:justify-start md:justify-center gap-8 md:gap-12 mt-15">
					{listRepositories.map(
						({ deployPath, title, description, imagePreview }, i) => (
							<ProjectCard
								key={`project-card-${i + 1}`}
								title={title}
								imagePreview={imagePreview}
								deployPath={deployPath}
								description={description}
							/>
						),
					)}
				</div>
			</main>
			<Footer />
		</div>
	);
}
