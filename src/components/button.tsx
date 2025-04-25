import Image from './image';
import type { ButtonProps } from '../types';
import '../styles/form.sass';

export default function Button({
	id,
	title,
	classButton = 'btn-blue',
	disabled = false,
	children,
	loading,
	onClick,
	onMouseOut,
	onMouseOver,
}: ButtonProps) {
	if (loading) {
		return (
			<button
				id={id}
				type="button"
				disabled={true}
				className={`flex cursor-wait items-center justify-center ${classButton}`}
			>
				<Image
					src="spin.svg"
					classImage="animate-spin w-[18%]"
					alt="loading"
					height={100}
					width={100}
				/>
			</button>
		);
	}

	return (
		<button
			id={id}
			type="button"
			onClick={onClick}
			onMouseOut={onMouseOut}
			onMouseOver={onMouseOver}
			disabled={disabled}
			className={`select-none ${classButton}`}
		>
			{title}
			{children}
		</button>
	);
}
