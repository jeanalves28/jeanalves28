'use client';

import { createContext } from 'react';
import Form from '../hooks/Form';
import type { ContextForm } from '../../types';

export const contextForm = createContext({} as ContextForm);

export function ProviderForm({ children }: { children: React.ReactNode }) {
	const values = Form();

	return (
		<contextForm.Provider value={values}>
			{children}
		</contextForm.Provider>
	);
}
