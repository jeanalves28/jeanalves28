'use client';

import { useEffect, useState } from 'react';
import { handlerPostEmail } from '../../services';
import type { EventParamsInput, Modal, RejectError } from '../../types';

const regexEmail = /^[\w\-.]+@[a-z0-9]+\.([a-z0-9]+\.?){1,}$/i;

export const clearRejectError = {
	isError: false,
	message: '',
};

export const clearModal = {
	show: false,
	message: '',
};

export default function Form() {
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
	const [isDisabledSubmit, setIsDisabledSubmit] = useState(true);
	const [isLoading, setLoading] = useState(false);
	const [modal, setModal] = useState<Modal>(clearModal);
	const [rejectError, setRejectError] = useState<RejectError>(clearRejectError);

	useEffect(() => {
		setIsDisabledSubmit(
			!regexEmail.test(email) || subject.length <= 2 || message.length <= 5,
		);
	}, [email, subject, message]);

	function handlerInput({
		currentTarget: { parentElement, value },
		currentTarget,
	}: EventParamsInput): void {
		if (rejectError.isError) {
			setTimeout(() => setRejectError(clearRejectError), 1500);
		}

		switch (parentElement!.textContent) {
			case 'E-mail':
				setEmail(value);

				if (!regexEmail.test(value)) {
					currentTarget.classList.remove('input-blue');

					currentTarget.classList.add('input-red');
				} else {
					currentTarget.classList.add('input-blue');

					currentTarget.classList.remove('input-red');
				}
				break;

			case 'Título':
				setSubject(value);

				if (value.length <= 2) {
					currentTarget.classList.remove('input-blue');

					currentTarget.classList.add('input-red');
				} else {
					currentTarget.classList.add('input-blue');

					currentTarget.classList.remove('input-red');
				}
				break;

			case 'Mensagem':
				setMessage(value);

				if (value.length <= 5) {
					currentTarget.classList.remove('input-blue');

					currentTarget.classList.add('input-red');
				} else {
					currentTarget.classList.add('input-blue');

					currentTarget.classList.remove('input-red');
				}
				break;

			default:
		}
	}

	async function handlerSubmitEmail(): Promise<void> {
		setLoading(true);

		setRejectError(clearRejectError);

		const { ok, err } =	await handlerPostEmail(email, subject, message);

		if (ok) {
			setEmail('');

			setSubject('');

			setMessage('');

			const textarea = document.getElementById('email-text');

			if (textarea) textarea.value = '';

			setModal({ show: true, message: 'Mensagem enviada com sucesso!' });
		} else {
			setRejectError({ isError: true, message: err! });
		}

		setLoading(false);
	}

	return {
		email,
		subject,
		rejectError,
		isDisabledSubmit,
		isLoading,
		modal,
		setModal,
		handlerInput,
		handlerSubmitEmail,
	};
}
