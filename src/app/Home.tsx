'use client';

import { useContext } from 'react';
import { Button, Image, Text, Title } from '../components';
import { contextTheme } from '../custom';
import Link from 'next/link';

export default function Page() {
	const { theme } = useContext(contextTheme);

	const borderColor =
		theme === 'system'
			? 'border-profile-system'
			: theme === 'dark'
				? 'border-profile-dark'
				: 'border-profile-light';

	return (
		<div className="flex h-full flex-col items-center gap-y-6">
			<div className="animate-fading-up-container-1 flex w-full grow items-center justify-center gap-x-60 leading-7">
				<div>
					<Title>Jean Alves</Title>
					<Text className="ml-4">Desenvolvedor Web Full-Stack</Text>
				</div>
				<Image
					src="profile.jpg"
					width="130"
					height="100"
					alt="profile"
					classImage={`rounded-full border-4 ${borderColor}`}
				/>
			</div>
			<div className="grow-3 animate-fading-up-container-2 flex w-full flex-col">
				<Title heading={2}>Bio</Title>
				<Text>
					Formado em 2023 no curso técnico de desenvolvimento Web Full-Stack
					(Front-End e Back-End). Amante da tecnologia, gamers e aficionado
					sobre as novidades do mundo da tecnologia.
				</Text>
			</div>
			<Link href="/projects">
				<Button title="Projetos" classButton="btn-green w-32" />
			</Link>
		</div>
	);
}
