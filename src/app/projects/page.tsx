import { ProviderNavMenuDropBox } from '../../custom';
import { listRepositories } from '../../repositories';
import { getPreview } from '../../services';
import Projects from './Projects';

export default async function Page() {
	const newListRepositories = await Promise.all(
		listRepositories.map(async ({ deployPath, ...props }) => {
			const { NEXT_PUBLIC_PROTOCOL, NEXT_PUBLIC_GITHUB_REPOSITORY } =
				process.env;

			const project = /(?![\w-.]\/)*\/[\w-.]+\/?$/.exec(deployPath)![0];

			const image = await getPreview(
				`${NEXT_PUBLIC_PROTOCOL}://${NEXT_PUBLIC_GITHUB_REPOSITORY}${project}`,
			);

			return {
				...props,
				deployPath,
				imagePreview: {
					...props.imagePreview,
					src: image ?? props.imagePreview.src,
				},
			};
		}),
	);

	return (
		<ProviderNavMenuDropBox>
			<Projects listRepositories={newListRepositories} />
		</ProviderNavMenuDropBox>
	);
}
