import { FC } from 'react';

import { IconProps } from './Icon.model';
import classes from './Icon.module.scss';
import StarIcon from '../../../assets/images/icon-star.svg';
import ThankYouIcon from '../../../assets/images/illustration-thank-you.svg';

export const Icon: FC<IconProps> = props => (
	<figure
		className={
			props.alt === 'Star' ? classes.starIcon : classes.thankYouIcon
		}
	>
		<img
			src={`${props.alt === 'Star' ? StarIcon : ThankYouIcon}`}
			width={props.width}
			height={props.height}
			alt={props.alt}
		/>
	</figure>
);
