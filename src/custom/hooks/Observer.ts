'use client';

import { useEffect, useRef } from 'react';

export default function Observer(
	options: IntersectionObserverInit = {
		root: null,
		rootMargin: '0px',
		threshold: 0.4,
	},
) {
	const ref = useRef({} as HTMLDivElement | null);
	const scrollPercent = useRef(0);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			const fullHeight =
				document.documentElement.scrollHeight - window.innerHeight;

			scrollPercent.current = (window.scrollY / fullHeight) * 100;
		});

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (
					ref.current &&
					entry.isIntersecting &&
					entry.intersectionRatio !== 1 &&
					ref.current.classList.contains('opacity-0')
				) {
					ref.current.classList.add('animate-appearing-element-observed');
				} else if (
					ref.current &&
					!entry.isIntersecting &&
					scrollPercent.current < 20
				) {
					ref.current.classList.add('opacity-0');
				}
			});
		}, options);

		if (ref.current) observer.observe(ref.current);
	}, []);

	return ref;
}
