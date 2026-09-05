'use client';

import { useContext } from 'react';
import {
	Background,
	BoxError,
	Button,
	Footer,
	Header,
	Input,
	Modal,
	Textarea,
} from '../../components';
import { contextForm, contextNavMenuDropBox, contextTheme } from '../../custom';
import { bgContainer, InputColors } from '../../utils';
import { usePathname } from 'next/navigation';

export default function Contact() {
	const {
		isDisabledSubmit,
		name,
		email,
		subject,
		message,
		isLoading,
		handlerInput,
		handlerSubmitEmail,
		handlerTextarea,
	} = useContext(contextForm);

	const { theme, handlerMouseOverCloseMenuTheme } = useContext(contextTheme);
	const { handlerMenuDropboxClose } = useContext(contextNavMenuDropBox);

	return (
		<section className="relative min-h-dvh">
			<Background />
			<Header />
			<Modal />
			<main className="pt-30 flex justify-center flex-1">
				<form
					className={`relative select-none z-1 h-fit w-95/100 pc:w-7/10 xl:w-6/10 2xl:w-5/10 transition-bg duration-200 ${bgContainer(
						theme,
						usePathname(),
					)} rounded-xl px-6 sm:px-10 pb-2 pt-10 shadow-2xl`}
				>
					<div className="w-full flex flex-col items-center gap-y-10">
						<Input
							id="name"
							value={name}
							disabled={isLoading}
							labelName="Nome"
							classLabel="w-full sm:w-9/10 pc:w-8/10"
							classInput={`${InputColors(
								'input-blue-system',
								'input-blue-dark',
								'input-blue',
							)} text-base h-11`}
							autoComplete="text"
							onInput={handlerInput}
							onClick={() => {
								handlerMouseOverCloseMenuTheme();

								handlerMenuDropboxClose();
							}}
						/>
						<Input
							id="email"
							value={email}
							disabled={isLoading}
							labelName="E-mail"
							classLabel="w-full sm:w-9/10 pc:w-8/10"
							classInput={`${InputColors(
								'input-blue-system',
								'input-blue-dark',
								'input-blue',
							)} text-base h-11`}
							autoComplete="email"
							type="email"
							onInput={handlerInput}
							onClick={() => {
								handlerMouseOverCloseMenuTheme();

								handlerMenuDropboxClose();
							}}
						/>
						<Input
							id="subject"
							value={subject}
							disabled={isLoading}
							labelName="Título"
							classLabel="w-full sm:w-9/10 pc:w-8/10"
							classInput={`${InputColors(
								'input-blue-system',
								'input-blue-dark',
								'input-blue',
							)} text-base h-11`}
							autoComplete="text"
							onInput={handlerInput}
							onClick={() => {
								handlerMouseOverCloseMenuTheme();

								handlerMenuDropboxClose();
							}}
						/>
						<Textarea
							id="message"
							value={message}
							disabled={isLoading}
							labelName="Mensagem"
							classLabel="flex flex-col self-stretch"
							classTextarea={`${InputColors(
								'input-blue-system',
								'input-blue-dark',
								'input-blue',
							)} text-base resize-none`}
							rows={9}
							maxLength={600}
							onInput={handlerTextarea}
							onClick={() => {
								handlerMouseOverCloseMenuTheme();

								handlerMenuDropboxClose();
							}}
						/>
						<Button
							classButton="btn-blue text-xl font-light pc:text-base w-95/100 h-18 pc:w-2/3 pc:h-12"
							loading={isLoading}
							disabled={isDisabledSubmit}
							onClick={handlerSubmitEmail}
							title="Enviar"
						/>
					</div>
					<BoxError />
				</form>
			</main>
			<Footer />
		</section>
	);
}
