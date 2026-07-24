import { useContext } from 'react';
import { contextTheme } from '../custom';
import { textColor } from '../utils';
import type { InputComponentProps } from '../types';

export default function Input({
	id,
	classInput,
	classLabel,
	labelName,
	...props
}: InputComponentProps) {
	const { theme } = useContext(contextTheme);

	classLabel = classLabel ? `${classLabel} ` : '';

	classInput = classInput ? `${classInput} ` : '';

	if (labelName) {
		return (
			<label
				htmlFor={id}
				className={`${classLabel}flex cursor-pointer flex-col`}
			>
				<span className={`${textColor(theme)} select-none pb-1 pl-2`}>
					{labelName}
				</span>
				<input id={id} className={classInput} {...props} />
			</label>
		);
	}

	return <input className={classInput} {...props} />;
}
