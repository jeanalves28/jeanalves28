'use client';

import { createContext } from 'react';
import ToggleTheme from '../hooks/ToggleTheme';
import type { ContextTheme } from '../../types';

export const contextTheme = createContext({} as ContextTheme);

export function ProviderTheme({ children }: { children: React.ReactNode }) {
	const theme = ToggleTheme();

	return (
		<contextTheme.Provider value={theme}>{children}</contextTheme.Provider>
	);
}
