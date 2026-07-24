import { useContext } from 'react';
import { contextTheme } from '../custom';
import { textColor } from '../utils';
import type { TextAreaComponentProps } from '../types';

export default function Textarea({
	id,
	labelName,
	classTextarea,
	classLabel,
	...props
}: TextAreaComponentProps) {
	const { theme } = useContext(contextTheme);

	classLabel = classLabel ? `${classLabel} ` : '';

	if (labelName) {
		return (
			<label
				htmlFor={id}
				className={`${classLabel}flex cursor-pointer flex-col`}
			>
				<span className={`${textColor(theme)} select-none pb-1 pl-2`}>
					{labelName}
				</span>
				<textarea id={id} className={classTextarea} {...props} />
			</label>
		);
	}

	return <textarea className={classTextarea} {...props} />;
}
