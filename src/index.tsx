import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';

import './assets/styles/style.scss';

createRoot(document.getElementById('root') as HTMLDivElement).render(
	<StrictMode>
		<App />
	</StrictMode>
);
