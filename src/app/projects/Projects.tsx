'use client';

import { ProjectCard } from '../../components';
import ContainerProjectCard from './containerProjectCard';
import type { ProjectProps } from '../../types';

export default function Projects({ listRepositories }: ProjectProps) {
	return (
		<ContainerProjectCard>
			{listRepositories.map(
				({ id, deployPath, title, description, imagePreview }, i) => (
					<ProjectCard
						key={ `project-card-${ i + 1 }` }
						id={id}
						title={title}
						imagePreview={imagePreview}
						deployPath={deployPath}
						description={description}
					/>
				),
			)}
		</ContainerProjectCard>
	);
}
