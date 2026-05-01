import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Projetos',
};

export default function LayoutProject({
	children,
}: {
	children: React.ReactNode;
}) {
	return <main>{children}</main>;
}
