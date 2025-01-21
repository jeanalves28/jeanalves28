'use client';

import { useContext, useEffect, useState } from 'react';
import { Footer, Header } from '../../components';
import { contextTheme } from '../../custom';
import { bgColor, textColor } from '../../utils';

export default function Page() {
	const [ loading, setLoading ] = useState('loading');
	const { theme } = useContext(contextTheme);

	useEffect(() => {
		setLoading(loading.padEnd(loading.length + 1, '.'));
	}, []);

	useEffect(() => {
		if (/\.{4}$/.test(loading)) setLoading('loading');
		else setTimeout(() => setLoading(loading.padEnd(loading.length + 1, '.')), 500);
	}, [loading]);

	return (
		<>
			<Header />
			<div className={`bg-main flex justify-center pt-16 ${bgColor(theme)}`}>
				<span className={textColor(theme)}>{loading}</span>
			</div>
			<Footer />
		</>
	);
}
