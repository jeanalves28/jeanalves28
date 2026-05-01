import type { LinkProps } from 'next/link';

export type EventFunction = React.MouseEventHandler<HTMLButtonElement>;

export type EventFunctionInput = React.FormEventHandler<HTMLInputElement> &
	React.FormEventHandler<HTMLTextAreaElement>;

export type EventParamsClick = React.MouseEvent;

export type EventParamsInput =
	| React.FormEvent<HTMLInputElement>
	| React.FormEvent<HTMLTextAreaElement>;

export type ToggleTheme = 'light' | 'dark' | 'system';

export interface Modal {
	show: boolean;
	message: string;
}

export interface RejectError {
	isError: boolean;
	message?: string;
}

export interface ResponseEmail {
	ok: boolean;
	err?: string;
}

export interface FormEmail {
	sender: string;
	subject: string;
	message: string;
}

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

export interface ButtonComponentProps {
	id?: string;
	title?: string;
	classButton?: string;
	disabled?: boolean;
	loading?: boolean;
	children?: React.ReactNode;
	onClick?: EventFunction;
	onMouseOut?: EventFunction;
	onMouseOver?: EventFunction;
}

export interface ModalComponentProps {
	children?: string;
}

export interface LinkComponentProps
	extends LinkProps, React.AnchorHTMLAttributes<HTMLAnchorElement> {
	href: string;
	children?: React.ReactNode;
}

export interface ImageComponentProps {
	src: string;
	srcDark?: string;
	alt: string;
	width: number | `${number}`;
	height: number | `${number}`;
	classImage?: string;
}

export interface TitleComponentProps {
	className?: string;
	heading?: 1 | 2;
	children: React.ReactNode;
}

export interface TextComponentProps {
	className?: string;
	children: React.ReactNode;
}

export interface ListComponentProps {
	arrayNames: string | Array<string | [string, string]>;
	classList?: string;
	classItems?: string;
	children?: React.ReactNode;
}

export interface InputComponentProps {
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
}
