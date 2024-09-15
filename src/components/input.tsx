import { useContext } from 'react';
import { contextTheme } from '../custom';
import type { InputProps } from '../types';

export default function Input({
	id,
	classInput,
	classLabel,
	labelName,
	autoComplete,
	disabled,
	value,
	rows,
	cols,
	type = 'text',
	onChange,
	onInput,
}: InputProps) {
	const { theme } = useContext(contextTheme);

	const themeClass =
		theme === 'system'
			? 'dark:bg-ghost-white bg-white'
			: theme === 'dark'
				? 'bg-ghost-white focus:border-blue-btn-theme focus:shadow-input-blue-theme-dark'
				: 'bg-white';

	if (type === 'textarea' && labelName) {
		return (
			<label
				htmlFor={id}
				className={`flex cursor-pointer flex-col text-inherit ${classLabel}`}
			>
				<span className="pb-1 pl-2 text-inherit">{labelName}</span>
				<textarea
					id={id}
					className={`${themeClass} ${classInput}`}
					value={value}
					disabled={disabled}
					rows={rows}
					cols={cols}
					onInput={onInput}
					onChange={onChange}
				/>
			</label>
		);
	}

	if (type === 'textarea') {
		return (
			<textarea
				id={id}
				className={`${themeClass} ${classInput}`}
				value={value}
				disabled={disabled}
				rows={rows}
				cols={cols}
				onInput={onInput}
				onChange={onChange}
			/>
		);
	}

	if (labelName) {
		return (
			<label
				htmlFor={id}
				className={`flex cursor-pointer flex-col text-inherit ${classLabel}`}
			>
				<span className="pb-1 pl-2 text-inherit">{labelName}</span>
				<input
					id={id}
					value={value}
					disabled={disabled}
					autoComplete={autoComplete}
					className={`${themeClass} ${classInput}`}
					type={type}
					onInput={onInput}
					onChange={onChange}
				/>
			</label>
		);
	}

	return (
		<input
			id={id}
			value={value}
			disabled={disabled}
			autoComplete={autoComplete}
			className={`${themeClass} ${classInput}`}
			type={type}
			onInput={onInput}
			onChange={onChange}
		/>
	);
}
