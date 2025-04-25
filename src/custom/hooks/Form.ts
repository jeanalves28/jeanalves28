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
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
	const [isDisabledSubmit, setIsDisabledSubmit] = useState(true);
	const [isLoading, setLoading] = useState(false);
	const [modal, setModal] = useState<Modal>(clearModal);
	const [rejectError, setRejectError] = useState<RejectError>(clearRejectError);

	useEffect(() => {
		setIsDisabledSubmit(
			!regexEmail.test(email) ||
			name.length <= 2 ||
			subject.length <= 2 ||
			message.length <= 5,
		);
	}, [name, email, subject, message]);

	function handlerInput({
		currentTarget: { value, id },
		currentTarget,
	}: EventParamsInput): void {
		if (rejectError.isError) {
			setTimeout(() => setRejectError(clearRejectError), 1500);
		}

		switch (id) {
			case 'email':
				setEmail(value);

				if (!regexEmail.test(value)) {
					currentTarget.classList.remove('input-blue');

					currentTarget.classList.add('input-red');
				} else {
					currentTarget.classList.add('input-blue');

					currentTarget.classList.remove('input-red');
				}
				break;

			case 'name':
				setName(value);

				if (value.length <= 2) {
					currentTarget.classList.remove('input-blue');

					currentTarget.classList.add('input-red');
				} else {
					currentTarget.classList.add('input-blue');

					currentTarget.classList.remove('input-red');
				}
				break;

			case 'subject':
				setSubject(value);

				if (value.length <= 2) {
					currentTarget.classList.remove('input-blue');

					currentTarget.classList.add('input-red');
				} else {
					currentTarget.classList.add('input-blue');

					currentTarget.classList.remove('input-red');
				}
				break;

			case 'message':
				setMessage(value);

				if (value.length <= 5) {
					currentTarget.classList.remove(
						'input-blue',
						'input-blue-theme-system',
						'input-blue-theme-dark',
					);

					currentTarget.classList.add('input-red');
				} else {
					currentTarget.classList.add(
						'input-blue',
						'input-blue-theme-system',
						'input-blue-theme-dark',
					);

					currentTarget.classList.remove('input-red');
				}
				break;

			default:
		}
	}

	async function handlerSubmitEmail(): Promise<void> {
		setLoading(true);

		setRejectError(clearRejectError);

		const { ok, err } = await handlerPostEmail(name, email, subject, message);

		if (!ok) {
			setRejectError({ isError: true, message: err });
		} else setModal({ show: true, message: 'E-mail enviado com sucesso!' });

		setLoading(false);
	}

	return {
		name,
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
