import { useState, FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import { RateUs } from '../pages/RateUs/RateUs';
import { ThankYou } from '../pages/ThankYou/ThankYou';

export const Content: FC = () => {
	const [submitedRating, setSubmitedRating] = useState<string>('');

	return (
		<Routes>
			<Route
				path="/"
				element={<RateUs setSubmitedRating={setSubmitedRating} />}
			/>
			<Route
				path="/thank-you"
				element={<ThankYou submitedRating={submitedRating} />}
			/>
		</Routes>
	);
};
