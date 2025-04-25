import email from '@emailjs/browser';
import type { ResponseEmail } from '../types';

export async function handlerPostEmail(
	name: string,
	sender: string,
	subject: string,
	message: string,
): Promise<ResponseEmail> {
	try {
		await email.send(
			process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '',
			process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '',
			{	name, subject, message, sender },
			{ publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY },
		);
	} catch (e) {
		const { message } = e as Error;

		console.log({ message });

		return { ok: false, err: message };
	}

	return { ok: true };
}
