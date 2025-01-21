export type EventFunction = React.MouseEventHandler<HTMLButtonElement>;

export type EventFunctionInput = React.FormEventHandler<HTMLInputElement> &
	React.FormEventHandler<HTMLTextAreaElement>;

export type EventParamsClick = React.MouseEvent;

export type EventParamsInput =
	| React.FormEvent<HTMLInputElement>
	| React.FormEvent<HTMLTextAreaElement>;

export type ToggleTheme = 'light' | 'dark' | 'system';

export type Modal = {
	show: boolean;
	message: string;
};

export type RejectError = {
	isError: boolean;
	message?: string;
};

export type ResponseEmail = {
	ok: boolean;
	err?: string;
};

export type FormEmail = {
	sender: string;
	subject: string;
	message: string;
};

export type NavigationHeader = Array<{
	title: string;
	path: string;
}>;

export type NavigationFooter = Array<{
	path: string;
	src: string;
	srcDark?: string;
	alt: string;
	width: `${number}` | number;
	height: `${number}` | number;
}>;

export type ButtonProps = {
	id?: string;
	title?: string;
	classButton?: string;
	disabled?: boolean;
	loading?: boolean;
	children?: React.ReactNode;
	onClick?: EventFunction;
	onMouseOut?: EventFunction;
	onMouseOver?: EventFunction;
};

export type ModalProps = {
	children?: string;
};

export type ImageProps = {
	src: string;
	srcDark?: string;
	alt: string;
	width: number | `${number}`;
	height: number | `${number}`;
	classImage?: string;
};

export type TitleProps = {
	className?: string;
	heading?: 1 | 2;
	children: React.ReactNode;
};

export type TextProps = {
	className?: string;
	children: React.ReactNode;
};

export type InputProps = {
	id?: string;
	value?: string;
	valueError?: boolean;
	labelName?: string;
	disabled?: boolean;
	loading?: boolean;
	autoComplete?: React.HTMLInputAutoCompleteAttribute;
	classInput?: string;
	classLabel?: string;
	rows?: number;
	cols?: number;
	type?: React.HTMLInputTypeAttribute | 'textarea';
	onInput?: EventFunctionInput;
	onChange?: EventFunctionInput;
};
