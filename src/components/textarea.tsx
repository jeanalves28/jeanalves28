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

	const themeClass =
		theme === 'system'
			? 'dark:bg-ghost-white bg-white input-blue-theme-system'
			: theme === 'dark'
				? 'bg-ghost-white input-blue-theme-dark'
				: 'bg-white';

	classLabel = classLabel ? `${classLabel} ` : '';

	classTextarea = classTextarea ? `${classTextarea} ` : '';

	if (labelName) {
		return (
			<label
				htmlFor={id}
				className={`${classLabel}flex cursor-pointer flex-col`}
			>
				<span className={`${textColor(theme)} select-none pb-1 pl-2`}>
					{labelName}
				</span>
				<textarea
					id={id}
					className={`${classTextarea}${themeClass}`}
					{...props}
				/>
			</label>
		);
	}

	return <textarea className={`${themeClass}${classTextarea}`} {...props} />;
}
