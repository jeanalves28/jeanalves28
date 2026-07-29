import { type Metadata } from 'next';
import { ProviderTheme } from '../custom';
import { mPlusRounded1c, sourceSans3, ubuntuMono } from '../fonts';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
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
				<ProviderTheme>{children}</ProviderTheme>
				<SpeedInsights />
				<Analytics />
			</body>
		</html>
	);
}
