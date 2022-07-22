import { Dispatch, SetStateAction } from 'react';

export interface RateUsProps {
	setSubmitedRating: Dispatch<SetStateAction<string>>;
}
