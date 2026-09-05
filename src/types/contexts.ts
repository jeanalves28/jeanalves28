import type {
	EventParam,
	EventParamsInput,
	EventParamsTextarea,
	MessageError,
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
	refMenuTheme: React.RefObject<HTMLUListElement>;
	handlerMenuToggle: (e: EventParam) => void;
	handlerClickToggle: (e: EventParam) => void;
	handlerMouseOverCloseMenuTheme: (e?: EventParam) => void;
}

export interface ContextNavMenuDropBox {
	isMenuDropBox: boolean;
	refNavMenuDropBox: React.RefObject<HTMLUListElement>;
	handlerMenuDropboxToggle: () => void;
	handlerMenuDropboxClose: () => void;
	handlerSelectingNavigation: (e: EventParam) => void;
}

export interface ContextForm {
	name: string;
	email: string;
	subject: string;
	message: string;
	messageError: MessageError;
	rejectError: RejectError;
	setRejectError: React.Dispatch<React.SetStateAction<RejectError>>;
	isDisabledSubmit: boolean;
	isLoading: boolean;
	modal: Modal;
	setModal: React.Dispatch<React.SetStateAction<Modal>>;
	clearForm: () => void;
	handlerInput: (e: EventParamsInput) => void;
	handlerTextarea: (e: EventParamsTextarea) => void;
	handlerSubmitEmail: (e: EventParam) => void;
}
