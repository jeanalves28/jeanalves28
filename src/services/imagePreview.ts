import { HandleError } from '../exceptions';
import * as cheerio from 'cheerio';
import type { CodeErrors } from '../types';

export default async function getPreview(url: string) {
	try {
		const response = await fetch(url, {
			headers: {
				'User-Agent':
					'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
			},
		});

		if (!response.ok) {
			throw new HandleError(response.status as CodeErrors);
		}

		const html = await response.text();

		const $ = cheerio.load(html);

		const link = $('meta[property="og:image"]')
			.attr('content');

		return link ?? null;
	} catch (err) {
		console.log(err);
	}

	return null;
}
