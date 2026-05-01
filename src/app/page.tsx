'use client';

import { useContext, useEffect } from 'react';
import { Footer, Header } from '../components';
import { contextTheme } from '../custom';
import { bgColor } from '../utils';
import Home from './Home';

export default function Page() {
	const { theme } = useContext(contextTheme);

	useEffect(() => {
		console.log('width: ', document.body.offsetWidth);

		console.log('height: ', document.body.offsetHeight);
	}, []);

	return (
		<div className={`${bgColor(theme)} bg-wallpaper-dev`}>
			<Header />
			<main className="flex justify-center bg-inherit pt-30">
				<Home />
			</main>
			<Footer />
		</div>
	);
}
