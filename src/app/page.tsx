'use client';

import { useContext } from 'react';
import { Footer, Header } from '../components';
import { contextTheme } from '../custom';
import { bgColor } from '../utils';
import Home from './Home';

export default function Page() {
	const { theme } = useContext(contextTheme);

	return (
		<div className={`bg-wallpaper-main ${bgColor(theme)}`}>
			<Header />
			<main className="flex justify-center min-h-screen pt-30">
				<Home />
			</main>
			<Footer />
		</div>
	);
}
