import { FC } from 'react';

import { Icon } from '../../UI/Icon/Icon';
import { Title } from '../../Title/Title';
import { Text } from '../../Text/Text';
import { RatingResult } from '../../RatingResult/RatingResult';

import { ThankYouProps } from './ThankYou.model';

export const ThankYou: FC<ThankYouProps> = props => (
	<>
		<Icon width="162" height="108" alt="Thank You" />
		<RatingResult rating={props.submitedRating} />
		<Title className="secondaryTitle" title="Thank you!" />
		<Text className="thankYou">
			We appreciate you taking the time to give a rating. If you ever need
			more support, don’t hesitate to get in touch!
		</Text>
	</>
);
