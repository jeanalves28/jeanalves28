'use client';

import { createContext } from 'react';
import NavMenuDropBox from '../hooks/NavMenuDropBox';
import type { ContextNavMenuDropBox } from '../../types';

export const contextNavMenuDropBox = createContext({} as ContextNavMenuDropBox);

export function ProviderNavMenuDropBox({
	children,
}: {
	children: React.ReactNode;
}) {
	const values = NavMenuDropBox();

	return (
		<contextNavMenuDropBox.Provider value={values}>
			{children}
		</contextNavMenuDropBox.Provider>
	);
}
