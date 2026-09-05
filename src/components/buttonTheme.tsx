import { useContext } from 'react';
import { contextNavMenuDropBox, contextTheme } from '../custom';
import { bgContainer } from '../utils';
import Button from './button';
import Image from './image';
import MenuSelectTheme from './menuSelectTheme';

export default function ButtonTheme() {
	const { handlerMenuDropboxClose } = useContext(contextNavMenuDropBox);
	const { theme, handlerMenuToggle, imageTheme } = useContext(contextTheme);

	return (
		<>
			<Button
				id="btn-theme"
				className={`${bgContainer(theme, 'btn-theme')} flex items-center justify-center rounded-xl border-2 h-11 w-14`}
				onClick={handlerMenuToggle}
				onMouseOver={handlerMenuDropboxClose}
			>
				<Image
					src={`/${imageTheme}_light.svg`}
					srcDark={`/${imageTheme}_dark.svg`}
					alt="icon theme"
					height="100"
					width="100"
					className="w-9 pointer-events-none"
				/>
			</Button>
			<MenuSelectTheme />
		</>
	);
}
