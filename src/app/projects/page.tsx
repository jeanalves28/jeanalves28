'use client';

import { useContext } from 'react';
import { Footer, Header } from '../../components';
import { contextTheme } from '../../custom';
import { bgColor } from '../../utils';
import Projects from './Projects';

export default function Page() {
	const { theme } = useContext(contextTheme);

	return (
		<div className={`bg-wallpaper-dev ${bgColor(theme)}`}>
			<Header />
			<main className="pt-30">
				<Projects />
			</main>
			<Footer />
		</div>
	);
}
