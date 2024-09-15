export function insertClassMenuTheme(...className: Array<string>) {
	const menu = document.getElementById('menu-theme');

	for (const name of className) if (menu) menu.classList.add(name);
}

export function removeClassMenuTheme(...className: Array<string>) {
	const menu = document.getElementById('menu-theme');

	for (const name of className) if (menu) menu.classList.remove(name);
}
