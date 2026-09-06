import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contato',
	icons: '/email.ico',
};

export default function LayoutContact({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
