import CustomError from './CustomError';
import type { CodeErrors } from '../types';

export default class HandleError extends CustomError {
	constructor(protected statusCode: CodeErrors) {
		if (Number(statusCode) === 404) {
			super('site não encontrado ou preview inexistente.');

			this.name = 'Not Found';
		} else {
			super('Ocorreu um erro ao carregar o site.');

			this.name = 'Error';
		}
	}
}
