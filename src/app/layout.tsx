import { type Metadata } from 'next';
import { ProviderForm, ProviderNavMenuDropBox, ProviderTheme } from '../custom';
import { mPlusRounded1c, sourceSans3, ubuntuMono } from '../fonts';
import '../styles/global.css';

export const metadata: Metadata = {
	title: 'Portfolio do Jean',
	icons: 'man_technologist.ico',
};

export default function LayoutRoot({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="pt-br"
			className={`${ubuntuMono.variable} ${sourceSans3.variable} ${mPlusRounded1c.variable}`}
		>
			<body suppressHydrationWarning>
				<ProviderForm>
					<ProviderNavMenuDropBox>
						<ProviderTheme>{children}</ProviderTheme>
					</ProviderNavMenuDropBox>
				</ProviderForm>
			</body>
		</html>
	);
}
