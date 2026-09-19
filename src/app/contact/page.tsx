import Contact from './Contact';
import { ProviderForm, ProviderNavMenuDropBox } from '@/custom';

export default function Page() {
	return (
		<ProviderForm>
			<ProviderNavMenuDropBox>
				<Contact />
			</ProviderNavMenuDropBox>
		</ProviderForm>
	);
}
