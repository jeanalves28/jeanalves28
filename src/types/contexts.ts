import type {
	EventParamsClick,
	EventParamsInput,
	EventParamsTextarea,
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
	handlerMouseOverCloseMenuTheme: (e?: EventParamsClick) => void;
}

export interface ContextNavMenuDropBox {
	isMenuDropBox: boolean;
	handlerMenuDropboxToggle: () => void;
	handlerMenuDropboxClose: () => void;
	handlerSelectingNavigation: (e: EventParamsClick) => void;
}

export interface ContextForm {
	name: string;
	email: string;
	subject: string;
	message: string;
	rejectError: RejectError;
	setRejectError: React.Dispatch<React.SetStateAction<RejectError>>;
	isDisabledSubmit: boolean;
	isLoading: boolean;
	modal: Modal;
	setModal: React.Dispatch<React.SetStateAction<Modal>>;
	clearForm: () => void;
	handlerInput: (e: EventParamsInput) => void;
	handlerTextarea: (e: EventParamsTextarea) => void;
	handlerSubmitEmail: (e: EventParamsClick) => void;
}
