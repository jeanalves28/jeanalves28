'use client';

import { useContext } from 'react';
import { contextTheme } from '../custom';
import { bgColor } from '../utils';
import { usePathname } from 'next/navigation';

export default function Background() {
	const { theme } = useContext(contextTheme);
	const path = usePathname();

	if (path.includes('/contact')) {
		return (
			<>
				<div className={`absolute inset-0 z-0 bg-cover bg-no-repeat ${bgColor(theme, path)}`} />
				<div className={`${bgColor(theme)} absolute inset-0 -z-1`} />
			</>
		);
	}

	return (
		<>
			<div className="absolute inset-0 z-0 bg-[url('../../public/bg_dev_merged.png')] bg-center bg-repeat-y opacity-[0.05] bg-size-[70%] laptop:bg-size-[40%] lg:bg-size-[50%]" />
			<div className={`${bgColor(theme)} absolute inset-0 -z-1`} />
		</>
	);
}
