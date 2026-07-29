import { useContext } from 'react';
import { contextForm } from '../custom';
import type { BoxErrorProps } from '../types';

export default function BoxError({ className }: BoxErrorProps) {
	const {
		rejectError: { isError, message },
	} = useContext(contextForm);

	className = className ? `${className} ` : '';

	return isError
		? (
			<div className="h-14 flex justify-center items-center">
				<span
					className={`${className}animate-fading-simple text-sm text-red-500`}
				>
					{message}
				</span>
			</div>
		)
		: (
			<div className="h-14" />
		);
}
