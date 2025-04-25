'use client';

import { useContext } from 'react';
import { Button, Footer, Header, Input, Modal } from '../../components';
import { contextForm, contextTheme } from '../../custom';
import { bgColor, bgContainer } from '../../utils';
import { usePathname } from 'next/navigation';

export default function Page() {
	const {
		isDisabledSubmit,
		name,
		email,
		subject,
		isLoading,
		modal: { show },
		rejectError: { isError, message },
		handlerInput,
		handlerSubmitEmail,
	} = useContext(contextForm);

	const { theme } = useContext(contextTheme);

	return (
		<>
			{show && <Modal />}
			<Header />
			<div
				className={`bg-contact ${bgColor(theme, usePathname())} flex items-center justify-center pt-16`}
			>
				<form
					className={`z-1 flex w-[45rem] flex-col transition-bg duration-200 ${bgContainer(
						theme,
						usePathname(),
					)} items-center gap-y-10 rounded-xl px-10 pb-5 pt-10 shadow-md`}
				>
					<Input
						id="name"
						value={name}
						disabled={isLoading}
						labelName="Nome"
						classLabel="w-[80%]"
						classInput="input-blue"
						autoComplete="text"
						onInput={handlerInput}
					/>
					<Input
						id="email"
						value={email}
						disabled={isLoading}
						labelName="E-mail"
						classLabel="w-[80%]"
						classInput="input-blue"
						autoComplete="email"
						type="email"
						onInput={handlerInput}
					/>
					<Input
						id="subject"
						value={subject}
						disabled={isLoading}
						labelName="Título"
						classLabel="w-[80%]"
						classInput="input-blue"
						autoComplete="text"
						onInput={handlerInput}
					/>
					<Input
						id="message"
						type="textarea"
						disabled={isLoading}
						labelName="Mensagem"
						classLabel="flex h-60 flex-col self-stretch"
						classInput="input-blue !h-full resize-none"
						onInput={handlerInput}
					/>
					<div className="flex h-24 flex-col items-center justify-between self-stretch">
						<Button
							classButton="!w-[30%] btn-blue"
							loading={isLoading}
							disabled={isDisabledSubmit}
							onClick={handlerSubmitEmail}
							title="Enviar"
						/>
						{isError && (
							<span className="animate-fading-simple text-sm text-red-500">
								{message}
							</span>
						)}
					</div>
				</form>
			</div>
			<Footer />
		</>
	);
}
