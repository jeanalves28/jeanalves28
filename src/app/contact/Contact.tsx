'use client';

import { useContext } from 'react';
import {
	BoxError,
	Button,
	Footer,
	Header,
	Input,
	Modal,
	Textarea,
} from '../../components';
import { contextForm, contextTheme } from '../../custom';
import { bgColor, bgContainer, InputColors } from '../../utils';
import { usePathname } from 'next/navigation';

export default function Contact() {
	const {
		isDisabledSubmit,
		name,
		email,
		subject,
		isLoading,
		handlerInput,
		handlerSubmitEmail,
		handlerTextarea,
	} = useContext(contextForm);

	const { theme } = useContext(contextTheme);

	return (
		<section
			className={`bg-wallpaper-contact ${bgColor(theme, usePathname())}`}
		>
			<Header />
			<Modal />
			<main className="pt-30 flex justify-center">
				<form
					className={`relative select-none z-1 h-fit w-95/100 md:w-7/10 xl:w-6/10 2xl:w-5/10 transition-bg duration-200 ${bgContainer(
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
							classLabel="w-full sm:w-9/10 md:w-[80%]"
							classInput={`${InputColors(
								'input-blue-system',
								'input-blue-dark',
								'input-blue',
							)} text-base h-11`}
							autoComplete="text"
							onInput={handlerInput}
						/>
						<Input
							id="email"
							value={email}
							disabled={isLoading}
							labelName="E-mail"
							classLabel="w-full sm:w-9/10 md:w-[80%]"
							classInput={`${InputColors(
								'input-blue-system',
								'input-blue-dark',
								'input-blue',
							)} text-base h-11`}
							autoComplete="email"
							type="email"
							onInput={handlerInput}
						/>
						<Input
							id="subject"
							value={subject}
							disabled={isLoading}
							labelName="Título"
							classLabel="w-full sm:w-9/10 md:w-[80%]"
							classInput={`${InputColors(
								'input-blue-system',
								'input-blue-dark',
								'input-blue',
							)} text-base h-11`}
							autoComplete="text"
							onInput={handlerInput}
						/>
						<Textarea
							id="message"
							disabled={isLoading}
							labelName="Mensagem"
							classLabel="flex h-60 flex-col self-stretch"
							classTextarea={`${InputColors(
								'input-blue-system',
								'input-blue-dark',
								'input-blue',
							)} h-full w-full text-base resize-none`}
							cols={20}
							rows={20}
							onInput={handlerTextarea}
						/>
						<Button
							classButton="btn-blue text-xl font-light md:text-base w-95/100 h-18 md:w-2/3 md:h-12"
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
