import { useContext } from 'react';
import { clearModal, contextForm, contextTheme } from '../custom';
import Button from './button';
import Text from './text';
import type { ModalComponentProps } from '../types';

export default function Modal({ children }: ModalComponentProps) {
	const {
		setModal,
		modal: { message, show },
	} = useContext(contextForm);

	const { theme } = useContext(contextTheme);

	const bgTheme =
		theme === 'system'
			? 'bg-color-modal-system'
			: theme === 'dark'
				? 'bg-color-modal-dark'
				: 'bg-color-modal-light';

	if (show) {
		return (
			<div className="fixed inset-0 z-3 animate-fading-bg-black">
				<div className="flex items-center justify-center h-full">
					<div
						className={`${bgTheme} animate-grow-modal flex h-60 w-[20rem] flex-col items-center justify-end gap-y-15 rounded-md p-8 text-inherit`}
					>
						<Text>
							{message}
							{children}
						</Text>
						<Button
							title="Fechar"
							onClick={() => setModal(clearModal)}
							classButton="h-fit w-30 btn-green text-sm!"
						/>
					</div>
				</div>
			</div>
		);
	}

	return null;
}
