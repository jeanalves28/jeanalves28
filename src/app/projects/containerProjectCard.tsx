'use client';

import { Background, Footer, Header, Title } from '../../components';

export default function ContainerProjectCard({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="relative min-h-dvh">
			<Background />
			<Header />
			<main className="pt-30 flex-1">
				<Title className="text-center">Projetos</Title>
				<div className="px-5 sm:px-10 pc:px-20 flex flex-col pc:flex-row pc:flex-wrap xl:justify-start pc:justify-center gap-y-14 pc:gap-12 mt-15">
					{children}
				</div>
			</main>
			<Footer />
		</section>
	);
}
