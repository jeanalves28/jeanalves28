'use server';

import { Resend } from 'resend';
import type { ResponseEmail } from '../types';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(
	name: string,
	sender: string,
	subject: string,
	message: string,
): Promise<ResponseEmail> {
	try {
		const response = await resend.emails.send({
			from: `Mensagem de ${name} <${process.env.EMAIL_FROM}>`,
			to: process.env.EMAIL_TO!,
			subject,
			text: `Mensagem enviada por ${sender}: ${message}`,
		});

		if (!response.data) return { ok: false, message: 'falha ao tentar enviar, tente novamente.' };
	} catch (e) {
		console.error(e);
	}

	return { ok: true, message: 'sucesso ao enviar' };
}
