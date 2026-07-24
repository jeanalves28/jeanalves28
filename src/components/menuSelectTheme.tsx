import { useContext } from 'react';
import { contextTheme } from '../custom';
import { textColor } from '../utils';
import Button from './button';

export default function MenuSelectTheme() {
	const { theme, isDisabledBtnTheme, handlerClickToggle, isSelectingTheme } =
		useContext(contextTheme);

	const bgColor =
		theme === 'system'
			? 'bg-white dark:bg-black-card dark:border-neutral-600 border-slate-300'
			: theme === 'dark'
				? 'bg-black-card border-neutral-600'
				: 'bg-white border-slate-300';

	const hoverBgContainer =
		theme === 'system'
			? 'hover:bg-neutral-200 dark:hover:bg-neutral-600'
			: theme === 'dark'
				? 'hover:bg-neutral-600'
				: 'hover:bg-neutral-200';

	if (isSelectingTheme) {
		return (
			<ul
				id="menu-theme"
				className={`top-13 absolute smartphone:right-0 md:-left-5 w-24 rounded-md border ${bgColor}`}
			>
				<li
					className={`flex justify-center rounded-t-md py-0.5 ${hoverBgContainer} transition-bg-color duration-300`}
				>
					<Button
						title="Sistema"
						classButton={`btn-theme cursor-pointer ${textColor(theme)}`}
						disabled={isDisabledBtnTheme}
						onClick={handlerClickToggle}
					/>
				</li>
				<li
					className={`flex justify-center py-0.5 ${hoverBgContainer} transition-bg-color duration-300`}
				>
					<Button
						title="Escuro"
						classButton={`btn-theme cursor-pointer ${textColor(theme)}`}
						disabled={isDisabledBtnTheme}
						onClick={handlerClickToggle}
					/>
				</li>
				<li
					className={`flex justify-center rounded-b-md py-0.5 ${hoverBgContainer} transition-bg-color duration-300`}
				>
					<Button
						title="Claro"
						classButton={`btn-theme cursor-pointer ${textColor(theme)}`}
						disabled={isDisabledBtnTheme}
						onClick={handlerClickToggle}
					/>
				</li>
			</ul>
		);
	}

	return null;
}
