import { FC, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { Icon } from '../../UI/Icon/Icon';
import { Title } from '../../Title/Title';
import { Text } from '../../Text/Text';
import { Form } from '../../Form/Form';

import { RateUsProps } from './RateUs.model';

export const RateUs: FC<RateUsProps> = props => {
	const navigate = useNavigate();

	const handleSubmitedRating = (
		event: FormEvent<HTMLFormElement>,
		ratingIndex: string
	): void => {
		event.preventDefault();
		props.setSubmitedRating(ratingIndex);
		navigate('/thank-you');
	};

	return (
		<>
			<Icon width="17" height="16" alt="Star" />
			<Title className="mainTitle" title="How did we do?" />
			<Text>
				Please let us know how we did with your support request. All
				feedback is appreciated to help us improve our offering!
			</Text>
			<Form onSubmitRating={handleSubmitedRating} />
		</>
	);
};
