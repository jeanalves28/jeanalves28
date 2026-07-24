import Image from './image';
import type { ButtonComponentProps } from '../types';
import '../styles/form.sass';

export default function Button({
	classButton = 'btn-blue',
	disabled = false,
	children,
	loading,
	title,
	...props
}: ButtonComponentProps) {
	if (loading) {
		return (
			<button
				className={`flex cursor-wait! items-center justify-center ${classButton}`}
				disabled={true}
				type="button"
			>
				<Image
					src="spin.svg"
					classImage="animate-spin w-full h-full"
					alt="loading"
					height={50}
					width={50}
				/>
			</button>
		);
	}

	return (
		<button
			className={`select-none ${classButton}`}
			disabled={disabled}
			type="button"
			{...props}
		>
			{title}
			{children}
		</button>
	);
}
