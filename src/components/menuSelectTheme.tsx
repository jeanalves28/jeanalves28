import { useContext } from 'react';
import { contextTheme } from '../custom';
import { textColor } from '../utils';
import Button from './button';

export default function MenuSelectTheme() {
	const { theme, isDisabledBtnTheme, handlerClickToggle, handlerHoverTheme } =
		useContext(contextTheme);

	const bgColor =
		theme === 'system'
			? 'bg-white dark:bg-stone-700'
			: theme === 'dark'
				? 'bg-stone-700'
				: 'bg-white';

	return (
		<ul
			id="menu-theme"
			className={`top-13 absolute left-[-0.6rem] w-24 rounded-md border py-0.5 ${bgColor}`}
		>
			<li
				className="flex justify-center pb-1"
				onMouseOver={handlerHoverTheme}
				onMouseOut={handlerHoverTheme}
			>
				<Button
					title="Sistema"
					classButton={`btn-theme ${textColor(theme)}`}
					disabled={isDisabledBtnTheme}
					onClick={handlerClickToggle}
				/>
			</li>
			<li
				className="flex justify-center pb-1"
				onMouseOut={handlerHoverTheme}
				onMouseOver={handlerHoverTheme}
			>
				<Button
					title="Escuro"
					classButton={`btn-theme ${textColor(theme)}`}
					disabled={isDisabledBtnTheme}
					onClick={handlerClickToggle}
				/>
			</li>
			<li
				className="flex justify-center"
				onMouseOver={handlerHoverTheme}
				onMouseOut={handlerHoverTheme}
			>
				<Button
					title="Claro"
					classButton={`btn-theme ${textColor(theme)}`}
					disabled={isDisabledBtnTheme}
					onClick={handlerClickToggle}
				/>
			</li>
		</ul>
	);
}
