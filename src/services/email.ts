import type { ResponseEmail } from '../types';

export async function handlerPostEmail(
	sender: string,
	subject: string,
	message: string,
): Promise<ResponseEmail> {

	const response = await fetch('/api/email', {
		method: 'POST',
		body: JSON.stringify({ sender, subject, message }),
	});

	return response.json();
}
