import { useContext } from 'react';
import { contextForm, contextTheme } from '../custom';
import { bgContainer } from '../utils';
import Text from './text';
import type { TextAreaComponentProps } from '../types';

export default function Textarea({
	id,
	labelName,
	classTextarea,
	classLabel,
	...props
}: TextAreaComponentProps) {
	const { theme, handlerMouseOverCloseMenuTheme } = useContext(contextTheme);
	const { messageError } = useContext(contextForm);

	classLabel = classLabel ? `${classLabel} ` : '';

	if (labelName) {
		return (
			<div className={classLabel}>
				<label
					htmlFor={id}
					className="flex cursor-pointer flex-col w-full h-full"
				>
					<Text className="pb-1 pl-2" type="span">
						{labelName}
					</Text>
					<textarea
						id={id}
						className={classTextarea}
						onClick={handlerMouseOverCloseMenuTheme}
						{...props}
					/>
				</label>
				{props.maxLength && (
					<div className="mt-1 text-right pr-1">
						{typeof props.value === 'string' && (
							<Text type="span">
								{`${props.value.length || 0}/${props.maxLength}`}
							</Text>
						)}
					</div>
				)}
				<div className="h-10">
					{messageError.isError && messageError.type === id && (
						<span
							id="message-error"
							className={`${bgContainer(theme, 'message-error')} animate-fading-simple text-sm text-center max-w-lg px-1.5 rounded-lg`}
						>
							{messageError.content}
						</span>
					)}
				</div>
			</div>
		);
	}

	return (
		<textarea
			className={classTextarea}
			onClick={handlerMouseOverCloseMenuTheme}
			{...props}
		/>
	);
}
