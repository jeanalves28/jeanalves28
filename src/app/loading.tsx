import { Background, Footer, Header, Image } from '../components';

export default function Loading() {
	return (
		<section className="relative min-h-dvh flex flex-col justify-center items-center">
			<Header />
			<Background />
			<Image
				className="animate-spin-fast w-50 mt-52"
				src="/spin_dark.svg"
				srcDark="/spin.svg"
				alt="loading"
				width={100}
				height={100}
			/>
			<Footer />
		</section>
	);
}
