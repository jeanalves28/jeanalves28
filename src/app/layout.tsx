import { Roboto } from 'next/font/google';
import { type Metadata } from 'next';
import '../styles/tailwind.css';

const roboto = Roboto({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
	title: 'Portfolio',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-br">
			<body className={roboto.className}>{children}</body>
		</html>
	);
}
