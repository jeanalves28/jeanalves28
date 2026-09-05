import type { Metadata } from 'next';
import { Suspense } from 'react';
import { ProviderNavMenuDropBox } from '../../../custom';
import SkeletonCard from './SkeletonCard';

export const metadata: Metadata = {
	title: 'Card Project',
	icons: '/select_web.svg',
};

export default function LayoutProjects({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ProviderNavMenuDropBox>
			<Suspense fallback={<SkeletonCard />}>{children}</Suspense>
		</ProviderNavMenuDropBox>
	);
}
