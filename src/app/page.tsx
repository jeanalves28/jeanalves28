import { Background, Footer, Header } from '../components';
import { ProviderNavMenuDropBox } from '../custom';
import Home from './Home';

export default function Page() {
	return (
		<ProviderNavMenuDropBox>
			<div className="relative min-h-dvh">
				<Background />
				<Header />
				<main className="flex justify-center pt-30">
					<Home />
				</main>
				<Footer />
			</div>
		</ProviderNavMenuDropBox>
	);
}
