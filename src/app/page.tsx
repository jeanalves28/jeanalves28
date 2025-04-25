'use client';

import { useContext } from 'react';
import { Footer, Header } from '../components';
import { contextTheme } from '../custom';
import { bgColor } from '../utils';
import Home from './Home';

export default function Page() {
	const { theme } = useContext(contextTheme);

	return (
		<>
			<Header />
			<main className={`bg-main flex justify-center ${bgColor(theme)}`}>
				<div className="w-[50rem] z-1">
					<Home />
				</div>
			</main>
			<Footer />
		</>
	);
}
