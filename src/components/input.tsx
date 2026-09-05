import { useContext } from 'react';
import { contextForm, contextTheme } from '../custom';
import { bgContainer } from '../utils';
import Text from './text';
import type { InputComponentProps } from '../types';

export default function Input({
	id,
	classInput,
	classLabel,
	labelName,
	...props
}: InputComponentProps) {
	const { messageError } = useContext(contextForm);
	const { theme } = useContext(contextTheme);

	classLabel = classLabel ? `${classLabel.trim()} ` : '';

	classInput = classInput ? `${classInput.trim()} ` : '';

	if (labelName) {
		return (
			<div className={classLabel}>
				<label htmlFor={id} className={'flex cursor-pointer flex-col'}>
					<Text className="pb-1 pl-1" type="span">
						{labelName}
					</Text>
					<input id={id} className={classInput} {...props} />
				</label>
				<div className="h-10 mt-1">
					{messageError.isError && messageError.type === id && (
						<span
							id="message-error"
							className={`${bgContainer(theme, 'message-error')} h-20 animate-fading-simple text-sm text-center px-1.5 pt-0.5 pb-1 rounded-lg`}
						>
							{messageError.content}
						</span>
					)}
				</div>
			</div>
		);
	}

	return <input className={classInput} {...props} />;
}
