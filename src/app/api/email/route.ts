import { NextResponse, type NextRequest } from 'next/server';
import { createTransport } from 'nodemailer';
import type { FormEmail } from '../../../types';

export const dynamic = 'force-static';

export async function POST(req: NextRequest) {
	const USER_EMAIL = process.env.NEXT_PUBLIC_USER_EMAIL;
	const PASS_EMAIL = process.env.NEXT_PUBLIC_PASS_EMAIL;
	const RECEIVER = process.env.NEXT_PUBLIC_RECEIVER_EMAIL;
	const { sender, subject, message }: FormEmail = await req.json();

	try {
		const authenticated = createTransport({
			service: 'gmail',
			auth: {
				user: USER_EMAIL,
				pass: PASS_EMAIL,
			},
		});

		await authenticated.sendMail({
			from: {
				name: sender,
				address: sender,
			},
			to: RECEIVER,
			subject,
			text: message,
		});
	} catch (e) {
		const { message } = e as Error;

		if (/timeout/i.test(message)) return NextResponse.json({
			ok: false,
			err: 'falha ao enviar: tempo expirado, tente novamente.',
		});

		return NextResponse.json({
			ok: false,
			err: message,
		});
	}

	return NextResponse.json({ ok: true });
}
