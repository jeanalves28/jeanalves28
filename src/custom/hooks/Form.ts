'use client';

import { useEffect, useRef, useState } from 'react';
import { removeInputThemeError, setInputThemeError } from '../../helpers';
import { sendEmail } from '../../services';
import type {
	EventParamsInput,
	EventParamsTextarea,
	MessageError,
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

const clearMessageError: MessageError = {
	isError: false,
	type: null,
	content: null,
};

export default function Form() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
	const [isDisabledSubmit, setIsDisabledSubmit] = useState(true);
	const [isLoading, setLoading] = useState(false);
	const [modal, setModal] = useState<Modal>(clearModal);

	const [messageError, setMessageError] =
		useState<MessageError>(clearMessageError);

	const [rejectError, setRejectError] = useState<RejectError>(clearRejectError);
	const vowelsPortuguese = 'áéíóúàèìòùâêîôûãõ';

	const patternEmail = useRef(
		RegExp('^[\\w-.]+@[a-z0-9]+\\.([a-z0-9]+\\.?)+$', 'i'),
	);

	const patternName = useRef(RegExp(`^[a-z${vowelsPortuguese} ]+$`, 'i'));
	const patternSubject = useRef(RegExp(`^[a-z${vowelsPortuguese} ]+$`, 'i'));

	const patternMessage = useRef(
		RegExp(`^[\\w\\s${vowelsPortuguese}.,:;!?-]+$`, 'i'),
	);

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
			!patternName.current.test(name) ||
			subject.length <= minLengthSubject ||
			!patternSubject.current.test(subject) ||
			message.length <= minLengthMessage ||
			!patternMessage.current.test(message),
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
		currentTarget,
		currentTarget: { value, id },
	}: EventParamsInput): void {
		if (rejectError.isError) clearBoxMessageError();

		switch (id) {
			case 'name':
				setName(value);

				if (value.length && !patternName.current.test(value)) {
					setMessageError({
						isError: true,
						type: id,
						content: 'Somente letras e espaços.',
					});
				} else setMessageError(clearMessageError);

				if (value.length <= minLengthName || !patternName.current.test(value)) {
					setInputThemeError(currentTarget);
				} else removeInputThemeError(currentTarget);

				break;

			case 'email':
				setEmail(value);

				if (value.length && !patternEmail.current.test(value)) {
					setMessageError({
						isError: true,
						type: id,
						content: 'Formato do e-mail inválido, ex: username@domain.com',
					});
				} else setMessageError(clearMessageError);

				if (!patternEmail.current.test(value)) {
					setInputThemeError(currentTarget);
				} else removeInputThemeError(currentTarget);
				break;

			case 'subject':
				setSubject(value);

				if (value.length && !patternSubject.current.test(value)) {
					setMessageError({
						isError: true,
						type: id,
						content: 'Somente letras e espaços.',
					});
				} else setMessageError(clearMessageError);

				if (
					value.length <= minLengthSubject ||
					!patternSubject.current.test(value)
				) {
					setInputThemeError(currentTarget);
				} else removeInputThemeError(currentTarget);
				break;

			default:
		}
	}

	function handlerTextarea({
		currentTarget,
		currentTarget: { value, id },
	}: EventParamsTextarea): void {
		if (rejectError.isError) clearBoxMessageError();

		setMessage(value);

		if (value.length && !patternMessage.current.test(value)) {
			setMessageError({
				isError: true,
				type: id,
				content: 'Somente alfanuméricos, espaços e .,:;!?-',
			});
		} else setMessageError(clearMessageError);

		if (
			value.length <= minLengthMessage ||
			!patternMessage.current.test(value)
		) {
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
		messageError,
		setModal,
		setRejectError,
		clearForm,
		handlerInput,
		handlerTextarea,
		handlerSubmitEmail,
	};
}
