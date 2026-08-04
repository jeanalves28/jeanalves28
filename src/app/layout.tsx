import { type Metadata } from 'next';
import { ProviderTheme } from '../custom';
import { mPlusRounded1c, sourceSans3, ubuntuMono } from '../fonts';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import '../styles/global.css';

export const metadata: Metadata = {
	title: {
		default: 'Jean Alves | Portfolio Front-End',
		template: '%s | Portfolio Front-End',
	},
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
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
