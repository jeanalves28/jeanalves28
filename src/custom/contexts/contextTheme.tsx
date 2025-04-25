'use client';

import { createContext } from 'react';
import type { ContextTheme } from '../../types';
import ToggleTheme from '../hooks/ToggleTheme';

export const contextTheme = createContext({} as ContextTheme);

export function ProviderTheme({ children }: { children: React.ReactNode }) {
	const theme = ToggleTheme();

	return (
		<contextTheme.Provider value={theme}>{children}</contextTheme.Provider>
	);
}
