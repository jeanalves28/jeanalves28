import { useContext, useEffect, useState } from 'react';
import { contextTheme } from '../../custom';
import { textColor } from '../../utils';

export default function Projects() {
	const { theme } = useContext(contextTheme);
	const [loading, setLoading] = useState('loading');

	useEffect(() => {
		setLoading(loading.padEnd(loading.length + 1, '.'));
	}, []);

	useEffect(() => {
		if (/\.{4}$/.test(loading)) setLoading('loading');
		else {
			setTimeout(
				() => setLoading(loading.padEnd(loading.length + 1, '.')),
				500,
			);
		}
	}, [loading]);

	return (
		<div className="flex justify-center pt-16">
			<span className={textColor(theme)}>{loading}</span>
		</div>
	);
}
