import { FC } from 'react';

import { Card } from './components/UI/Card/Card';
import { Content } from './components/Content/Content';
import { Footer } from './components/Layouts/Footer/Footer';

export const App: FC = () => (
	<>
		<Card>
			<Content />
		</Card>
		<Footer />
	</>
);
