'use client';

import { useRef } from 'react';
import type { EventParam, HookRadialStalking } from '../../types';

export default function RadialColorStalking(): HookRadialStalking {
	const refDivRadialStalking = useRef({} as HTMLDivElement);
	const refAnchorRadialStalking = useRef({} as HTMLAnchorElement);

	function handlerRadialColorEnter(
		e: EventParam<HTMLDivElement & HTMLAnchorElement>,
	) {
		switch (e.currentTarget.tagName.toLocaleLowerCase()) {
			case 'a':
				refAnchorRadialStalking.current.classList.add('hover:opacity-100');
				break;

			case 'div':
				refDivRadialStalking.current.classList.add('hover:opacity-100');
				break;

			default:
		}
	}

	function handlerRadialColorLeave(
		e: EventParam<HTMLDivElement & HTMLAnchorElement>,
	) {
		switch (e.currentTarget.tagName.toLocaleLowerCase()) {
			case 'a':
				refAnchorRadialStalking.current.classList.remove('hover:opacity-100');
				break;

			case 'div':
				refDivRadialStalking.current.classList.remove('hover:opacity-100');
				break;

			default:
		}
	}

	function handlerRadialColorMove(
		e: EventParam<HTMLDivElement & HTMLAnchorElement>,
	) {
		const rect = e.currentTarget.getBoundingClientRect();

		e.currentTarget.style.setProperty('--rect-x', `${e.clientX - rect.left}px`);

		e.currentTarget.style.setProperty('--rect-y', `${e.clientY - rect.top}px`);
	}

	return {
		refDivRadialStalking,
		refAnchorRadialStalking,
		handlerRadialColorEnter,
		handlerRadialColorLeave,
		handlerRadialColorMove,
	};
}
