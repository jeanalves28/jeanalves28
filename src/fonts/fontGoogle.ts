import {
	M_PLUS_Rounded_1c,
	Source_Sans_3,
	Ubuntu_Mono,
} from 'next/font/google';

export const sourceSans3 = Source_Sans_3({
	subsets: ['latin'],
	weight: '400',
	variable: '--font-source-sans-3',
});

export const ubuntuMono = Ubuntu_Mono({
	subsets: ['latin'],
	weight: ['400', '700'],
	variable: '--font-ubuntu-mono',
});

export const mPlusRounded1c = M_PLUS_Rounded_1c({
	subsets: ['latin'],
	weight: ['100', '300', '400', '500', '700', '800', '900'],
	variable: '--font-m-plus-rounded-1c',
});
