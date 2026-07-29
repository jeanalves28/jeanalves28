import type { CodeErrors } from '../types';

export default abstract class CustomError extends Error {
	protected	abstract statusCode: CodeErrors;
}
