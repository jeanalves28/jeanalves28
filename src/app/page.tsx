'use client';

import { useContext } from 'react';
import { Footer, Header } from '../components';
import { contextTheme } from '../custom';
import { bgColor } from '../utils';
import Home from './Home';

export default function Page() {
	const { theme } = useContext(contextTheme);

	return (
		<div className={`${bgColor(theme)} bg-wallpaper-dev`}>
			<Header />
			<main className="flex justify-center w-full pt-30">
				<Home />
			</main>
			<Footer />
		</div>
	);
}
