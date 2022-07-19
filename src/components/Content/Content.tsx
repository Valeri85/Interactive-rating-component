import { useState, FC, FormEvent } from 'react';

import { Icon } from '../UI/Icon/Icon';
import { Title } from '../Title/Title';
import { Text } from '../Text/Text';
import { Form } from '../Form/Form';
import { RatingResult } from '../RatingResult/RatingResult';

export const Content: FC = () => {
	const [submitedRating, setSubmitedRating] = useState<string>('');

	const handleSubmitedRating = (
		event: FormEvent<HTMLFormElement>,
		ratingIndex: string
	): void => {
		event.preventDefault();
		setSubmitedRating(ratingIndex);
	};

	return (
		<>
			{!submitedRating ? (
				<>
					<Icon width="17" height="16" alt="Star" />
					<Title className="mainTitle" title="How did we do?" />
					<Text>
						Please let us know how we did with your support request.
						All feedback is appreciated to help us improve our
						offering!
					</Text>
					<Form onSubmitRating={handleSubmitedRating} />
				</>
			) : (
				<>
					<Icon width="162" height="108" alt="Thank You" />
					<RatingResult rating={submitedRating} />
					<Title className="secondaryTitle" title="Thank you!" />
					<Text className="thankYou">
						We appreciate you taking the time to give a rating. If
						you ever need more support, don’t hesitate to get in
						touch!
					</Text>
				</>
			)}
		</>
	);
};
