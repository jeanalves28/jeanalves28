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
		<div className="flex flex-col justify-start items-center h-max w-5xl gap-y-20 z-1">
			<div className="animate-appearing-up-container-1 flex smartphone:flex-col smartphone:gap-y-14 w-full md:flex-row items-center justify-center gap-x-[30%] leading-7">
				<div>
					<Title className="md:mb-1 md:block smartphone:flex smartphone:justify-center">
						Jean Alves
					</Title>
					<Text className="md:ml-4 text-base">
						Desenvolvedor Web Full-Stack
					</Text>
				</div>
				<Image
					src="profile.jpg"
					width="130"
					height="100"
					alt="profile"
					draggable={false}
					classImage={`rounded-full border-4 select-none ${borderColor}`}
				/>
			</div>
			<div className="animate-appearing-up-container-2 flex flex-col laptop:w-full smartphone:w-9/10">
				<Title
					className="w-fit mb-1 smartphone:self-center md:self-start"
					heading={2}
				>
					Bio
				</Title>
				<Text className="text-lg whitespace-pre-line md:text-left smartphone:text-center">
					Formado em 2023 no curso técnico de desenvolvimento Web Full-Stack
					(Front-End e Back-End). Amante da tecnologia, gamers e aficionado
					sobre as novidades do mundo da tecnologia.
				</Text>
			</div>
			<div className="animate-appearing-up-container-3 w-full flex flex-col laptop:w-full smartphone:w-9/10">
				<Title
					className="w-fit mb-1 smartphone:self-center md:self-start"
					heading={2}
				>
					Tecnologias
				</Title>
				<List
					classList="list-none grid grid-cols-2 "
					classItems="ml-2 text-lg flex items-center gap-x-1 whitespace-pre-line min-h-fit"
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
