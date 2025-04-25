import { useContext } from 'react';
import { clearModal, contextForm, contextTheme } from '../custom';
import Button from './button';
import type { ModalProps } from '../types';

export default function Modal({ children }: ModalProps) {
	const {
		setModal,
		modal: { message },
	} = useContext(contextForm);

	const { theme } = useContext(contextTheme);

	const bgTheme =
		theme === 'system'
			? 'bg-color-container-system'
			: theme === 'dark'
				? 'bg-color-container-dark'
				: 'bg-color-container-light';

	return (
		<div className="bg-modal">
			<div className="flex h-screen items-center justify-center">
				<div className={`${bgTheme} container-modal`}>
					{children}
					{message}
					<Button
						title="Fechar"
						onClick={() => setModal(clearModal)}
						classButton="h-7 w-1/3 btn-green flex items-center justify-center text-sm"
					/>
				</div>
			</div>
		</div>
	);
}
