import { listRepositories } from '../../repositories';
import { getPreview } from '../../services';
import Projects from './Projects';

export default async function Page() {
	const newListRepositories = await Promise.all(
		listRepositories.map(async ({ deployPath, ...props }) => {
			const { NEXT_PUBLIC_PROTOCOL, NEXT_PUBLIC_REPOSITORY_MAIN } = process.env;

			const project = /(?![\w-.]\/)*\/[\w-.]+\/?$/.exec(deployPath)![0];

			const image = await getPreview(
				`${NEXT_PUBLIC_PROTOCOL}://${NEXT_PUBLIC_REPOSITORY_MAIN}${project}`,
			);

			return {
				...props,
				deployPath,
				imagePreview: {
					src: image ?? props.imagePreview.src,
					width: image ? 100 : 50,
					height: image ? 100 : 50,
				},
			};
		}),
	);

	return <Projects listRepositories={newListRepositories} />;
}
