import { type Metadata } from 'next';
import { ProviderForm, ProviderTheme } from '../custom';
import { mPlusRounded1c, sourceSans } from '../fonts';
import '../styles/tailwind.css';

export const metadata: Metadata = {
	title: 'Portfolio do Jean',
	icons: 'man_technologist.ico',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-br">
			<body className={`${sourceSans.className} ${mPlusRounded1c.variable}`}>
				<ProviderForm>
					<ProviderTheme>{children}</ProviderTheme>
				</ProviderForm>
			</body>
		</html>
	);
}
