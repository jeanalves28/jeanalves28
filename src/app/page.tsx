import { Background, Footer, Header } from '../components';
import { ProviderNavMenuDropBox } from '../custom';
import Home from './Home';

export default function Page() {
	return (
		<div className="relative min-h-dvh">
			<ProviderNavMenuDropBox>
				<Background />
				<Header />
				<main className="flex justify-center pt-30">
					<Home />
				</main>
				<Footer />
			</ProviderNavMenuDropBox>
		</div>
	);
}
