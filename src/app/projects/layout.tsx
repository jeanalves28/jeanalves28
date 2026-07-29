import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Projetos',
	icons: 'select_web.svg',
};

export default function LayoutProjects({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
