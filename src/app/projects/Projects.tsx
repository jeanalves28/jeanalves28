'use client';

import {
	Background,
	Footer,
	Header,
	ProjectCard,
	Title,
} from '../../components';
import type { ProjectProps } from '../../types';

export default function Projects({ listRepositories }: ProjectProps) {
	return (
		<div className="relative min-h-dvh">
			<Background />
			<Header />
			<main className="pt-30 flex-1">
				<Title className="text-center">Projetos</Title>
				<div className="px-5 sm:px-10 pc:px-20 flex flex-col pc:flex-row pc:flex-wrap xl:justify-start pc:justify-center gap-y-14 pc:gap-12 mt-15">
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
