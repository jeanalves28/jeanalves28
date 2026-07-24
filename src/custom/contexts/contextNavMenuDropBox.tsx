'use client';

import { createContext } from 'react';
import NavMenuDropBox from '../hooks/NavMenuDropBox';
import type { EventParamsClick } from '../../types';

interface ContextNavMenuDropBox {
	widthScreen: boolean | null;
	isMenuDropBox: boolean;
	handlerMenuDropboxToggle: () => void;
	handlerMenuDropboxClose: () => void;
	handlerSelectingNavigation: (e: EventParamsClick) => void;
}

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
