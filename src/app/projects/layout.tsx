import type { Metadata } from 'next';
import { Suspense } from 'react';
import { ProviderNavMenuDropBox } from '../../custom';
import SkeletonProjects from './SkeletonProjects';

export const metadata: Metadata = {
	title: 'Projetos',
	icons: '/select_web.svg',
};

export default function LayoutProjects({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ProviderNavMenuDropBox>
			<Suspense fallback={<SkeletonProjects />}>{children}</Suspense>
		</ProviderNavMenuDropBox>
	);
}
