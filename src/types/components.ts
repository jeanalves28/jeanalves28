import type { ImageProps } from 'next/image';
import type { LinkProps } from 'next/link';

export type EventParamsClick = React.MouseEvent;

export type EventParamsInput = React.InputEvent<HTMLInputElement>;

export type EventParamsTextarea = React.InputEvent<HTMLTextAreaElement>;

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

export interface ButtonComponentProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	classButton?: string;
	loading?: boolean;
	children?: React.ReactNode;
}

export interface ModalComponentProps {
	children?: string;
}

export interface LinkComponentProps
	extends LinkProps, React.AnchorHTMLAttributes<HTMLAnchorElement> {
	href: string;
	children?: React.ReactNode;
}

export interface ImageComponentProps extends ImageProps {
	src: string;
	srcDark?: string;
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

export interface InputComponentProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	labelName?: string;
	loading?: boolean;
	classInput?: string;
	classLabel?: string;
}

export interface TextAreaComponentProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	labelName?: string;
	loading?: boolean;
	classTextarea?: string;
	classLabel?: string;
}
