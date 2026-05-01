import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contato',
	icons: '/email.ico',
};

export default function LayoutProject({
	children,
}: {
	children: React.ReactNode;
}) {
	return <main>{children}</main>;
}
