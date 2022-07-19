import { FormEvent } from 'react';

export interface FormProps {
	onSubmitRating: (
		event: FormEvent<HTMLFormElement>,
		ratingIndex: string
	) => void;
}
