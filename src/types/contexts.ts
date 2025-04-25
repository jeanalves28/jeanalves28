import type {
	EventParamsClick,
	EventParamsInput,
	Modal,
	RejectError,
	ToggleTheme,
} from './components';

export interface ContextTheme {
	theme: ToggleTheme;
	imageTheme: string;
	isSelectingTheme: boolean;
	isDisabledBtnTheme: boolean;
	setTheme: React.Dispatch<React.SetStateAction<ToggleTheme>>;
	handlerMenuToggle: (e: EventParamsClick) => void;
	handlerClickToggle: (e: EventParamsClick) => void;
	handlerHoverTheme: (e: EventParamsClick) => void;
	handlerMouseOverClose: (e: EventParamsClick) => void;
}

export interface ContextForm {
	name: string;
	email: string;
	subject: string;
	rejectError: RejectError;
	isDisabledSubmit: boolean;
	isLoading: boolean;
	modal: Modal;
	setModal: React.Dispatch<React.SetStateAction<Modal>>;
	handlerInput: (e: EventParamsInput) => void;
	handlerSubmitEmail: (e: EventParamsClick) => void;
}
