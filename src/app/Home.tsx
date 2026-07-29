'use client';

import { useContext } from 'react';
import {
	Button,
	Image,
	Link,
	List,
	Text,
	Title,
} from '../components';
import { contextTheme } from '../custom';

export default function Page() {
	const { theme } = useContext(contextTheme);

	const borderColor =
		theme === 'system'
			? 'border-profile-system'
			: theme === 'dark'
				? 'border-profile-dark'
				: 'border-profile-light';

	const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
		const rect = e.currentTarget.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		const centerX = rect.width / 2;
		const centerY = rect.height / 2;
		const shadowX = (x - centerX) / 3;
		const shadowY = (y - centerY) / 3;

		e.currentTarget.style.setProperty('--x', `${x}px`);

		e.currentTarget.style.setProperty('--y', `${y}px`);

		e.currentTarget.style.setProperty('--shadow-x', `${shadowX}px`);

		e.currentTarget.style.setProperty('--shadow-y', `${shadowY}px`);
	};

	return (
		<div className="flex flex-col justify-start items-center w-full pc:w-6/10 2xl:w-1/2 gap-y-20 z-1">
			<div className="animate-appearing-up-container-1 w-full lg:w-9/10 xl:w-65/100 flex max-pc:flex-col items-center max-pc:gap-y-10 pc:flex-row-reverse pc:justify-between leading-relaxed">
				<Image
					src="/profile.jpg"
					width={2000}
					height={2000}
					alt="profile"
					draggable={false}
					className={`select-none w-40 ${borderColor}`}
				/>
				<div>
					<Title className="flex justify-center pc:mb-1 pc:block">
						Jean Alves
					</Title>
					<Text className="pc:ml-4 text-base">
						Desenvolvedor Web Full-Stack
					</Text>
				</div>
			</div>
			<div className="animate-appearing-up-container-2 w-9/10 pc:w-full flex flex-col">
				<Title
					className="w-fit mb-1 pc:ml-5 self-center pc:self-start"
					heading={2}
				>
					Bio
				</Title>
				<Text className="text-lg whitespace-pre-line text-center pc:text-left">
					Formado em 2023 no curso técnico de desenvolvimento Web Full-Stack
					(Front-End e Back-End). Amante da tecnologia, gamers e aficionado
					sobre as novidades do mundo da tecnologia.
				</Text>
			</div>
			<div className="animate-appearing-up-container-3 w-9/10 pc:w-full flex flex-col">
				<Title
					className="w-fit mb-1.5 pc:ml-5 max-pc:self-center pc:self-start"
					heading={2}
				>
					Tecnologias
				</Title>
				<List
					classList="list-none gap-y-2 grid max-xs:pl-7 grid-cols-1 xs:grid-cols-[1.9fr_1fr] pc:grid-cols-[1.5fr_repeat(2,1fr)] 2xl:grid-cols-[1.5fr_repeat(3,1fr)]"
					classItems="text-lg flex items-center whitespace-nowrap gap-x-1 no-wrap w-5"
					arrayNames={[
						['icons/bash.svg', 'Bash'],
						['icons/git.svg', 'Git'],
						['icons/html5.svg', 'HTML'],
						['icons/css3.svg', 'CSS'],
						['icons/nodejs.svg', 'Node'],
						['icons/javascript.svg', 'JavaScript'],
						['icons/typescript.svg', 'TypeScript'],
						['icons/maven.svg', 'Maven'],
						['icons/java.svg', 'Java'],
						['icons/java_spring.svg', 'Java Spring'],
						['icons/nextjs.svg', 'Next'],
						['icons/react.svg', 'React'],
						['icons/react_testing_library.svg', 'React Testing Library'],
						['icons/jest.svg', 'Jest'],
						['icons/redux.svg', 'Redux'],
						['icons/tailwind.svg', 'Tailwind'],
						['icons/sass.svg', 'Sass'],
						['icons/chai.svg', 'Chai'],
						['icons/mocha.svg', 'Mocha'],
						['icons/python.svg', 'Python'],
						['icons/docker.svg', 'Docker'],
						['icons/sql.svg', 'SQL'],
						['icons/sequelize.svg', 'Sequelize'],
					]}
				/>
			</div>
			<Link href="/projects" className="animate-appearing-up-container-4">
				<Button
					title="Projetos"
					classButton="btn-blue w-32 hover:shadow-[var(--shadow-x,0px)_var(--shadow-y,0px)_20px_rgba(13,110,253,80%)] transition-shadow duration-300"
					onMouseMove={handleMouseMove}
					onMouseLeave={(e) => {
						e.currentTarget.style.setProperty('--shadow-x', '0px');

						e.currentTarget.style.setProperty('--shadow-y', '0px');
					}}
				/>
			</Link>
		</div>
	);
}
