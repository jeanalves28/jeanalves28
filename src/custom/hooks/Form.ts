'use client';

import { useEffect, useRef, useState } from 'react';
import { removeInputThemeError, setInputThemeError } from '../../helpers';
import { sendEmail } from '../../services';
import type {
	EventParamsInput,
	EventParamsTextarea,
	Modal,
	RejectError,
} from '../../types';

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
	const patternEmail = useRef(/^[\w\-.]+@[a-z0-9]+\.([a-z0-9]+\.?){1,}$/i);
	const minLengthName = 2;
	const minLengthSubject = 2;
	const minLengthMessage = 5;
	const millisecondsExpiredError = 1500;

	useEffect(() => {
		if (modal.show) {
			document.documentElement.classList.add('overflow-hidden!');
		} else {
			document.documentElement.classList.remove('overflow-hidden!');
		}
	}, [modal]);

	useEffect(() => {
		setIsDisabledSubmit(
			!patternEmail.current.test(email) ||
			name.length <= minLengthName ||
			subject.length <= minLengthSubject ||
			message.length <= minLengthMessage,
		);
	}, [name, email, subject, message]);

	function clearBoxMessageError() {
		setTimeout(
			() => setRejectError(clearRejectError),
			millisecondsExpiredError,
		);
	}

	function clearForm() {
		setName('');

		setEmail('');

		setSubject('');

		setMessage('');
	}

	function handlerInput({
		currentTarget: { value, id },
		currentTarget,
	}: EventParamsInput): void {
		if (rejectError.isError) clearBoxMessageError();

		switch (id) {
			case 'email':
				setEmail(value);

				if (!patternEmail.current.test(value)) {
					setInputThemeError(currentTarget);
				} else removeInputThemeError(currentTarget);
				break;

			case 'name':
				setName(value);

				if (value.length <= minLengthName) {
					setInputThemeError(currentTarget);
				} else removeInputThemeError(currentTarget);
				break;

			case 'subject':
				setSubject(value);

				if (value.length <= minLengthSubject) {
					setInputThemeError(currentTarget);
				} else removeInputThemeError(currentTarget);
				break;

			default:
		}
	}

	function handlerTextarea({ currentTarget }: EventParamsTextarea): void {
		if (rejectError.isError) clearBoxMessageError();

		setMessage(currentTarget.value);

		if (currentTarget.value.length <= minLengthMessage) {
			setInputThemeError(currentTarget);
		} else removeInputThemeError(currentTarget);
	}

	async function handlerSubmitEmail() {
		setLoading(true);

		setRejectError(clearRejectError);

		const response = await sendEmail(name, email, subject, message);

		if (!response.ok) {
			setRejectError({
				isError: true,
				message: response.message,
			});
		} else setModal({ show: true, message: 'E-mail enviado com sucesso!' });

		setLoading(false);
	}

	return {
		name,
		email,
		subject,
		message,
		rejectError,
		isDisabledSubmit,
		isLoading,
		modal,
		setModal,
		setRejectError,
		clearForm,
		handlerInput,
		handlerTextarea,
		handlerSubmitEmail,
	};
}
