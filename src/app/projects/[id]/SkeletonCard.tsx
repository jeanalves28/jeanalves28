import { Background, Footer, Header } from '../../../components';

export default function SkeletonCard() {
	return (

		<section className="relative min-h-dvh">
			<Background />
			<Header />
			<div>loading</div>
			<Footer />
		</section>
	);
}
