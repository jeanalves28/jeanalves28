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

	return (
		<div className="flex flex-col justify-start items-center h-max w-5xl gap-y-20 z-1">
			<div className="animate-appearancing-up-container-1 flex smartphone:flex-col smartphone:gap-y-14 w-full md:flex-row items-center justify-center gap-x-[30%] leading-7">
				<div className="">
					<Title className="md:mb-1 md:block smartphone:flex smartphone:justify-center">Jean Alves</Title>
					<Text className="md:ml-4 text-base">Desenvolvedor Web Full-Stack</Text>
				</div>
				<Image
					src="/profile.jpg"
					width="130"
					height="100"
					alt="profile"
					classImage={`rounded-full border-4 ${borderColor}`}
				/>
			</div>
			<div className="animate-appearancing-up-container-2 flex flex-col laptop:w-full smartphone:w-9/10">
				<Title className="w-fit mb-1" heading={2}>
					Bio
				</Title>
				<Text className="text-lg">
					Formado em 2023 no curso técnico de desenvolvimento Web Full-Stack
					(Front-End e Back-End). Amante da tecnologia, gamers e aficionado
					sobre as novidades do mundo da tecnologia.
				</Text>
			</div>
			<div className="animate-appearancing-up-container-3 w-full flex flex-col laptop:w-full smartphone:w-9/10">
				<Title className="w-fit mb-1" heading={2}>
					Tecnologias
				</Title>
				<List
					classList="list-inside list-none columns-3 w-9/10 self-center"
					classItems="ml-2 text-lg flex flex-row gap-x-1"
					arrayNames={[
						['icons/bash.svg', 'Bash'],
						['icons/git.svg', 'Git'],
						['icons/html5.svg', 'HTML'],
						['icons/css3.svg', 'CSS'],
						['icons/javascript.svg', 'JavaScript'],
						['icons/typescript.svg', 'TypeScript'],
						['icons/nextjs.svg', 'Next.js'],
						['icons/react.svg', 'React.js'],
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
			<Link href="/projects" className="animate-appearancing-up-container-4">
				<Button title="Projetos" classButton="btn-green w-32" />
			</Link>
		</div>
	);
}
