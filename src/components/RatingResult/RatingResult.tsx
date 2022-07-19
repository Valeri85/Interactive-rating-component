import { FC } from 'react';

import { RatingResultProps } from './RatingResult.model';
import classes from './RatingResult.module.scss';

export const RatingResult: FC<RatingResultProps> = props => (
	<p className={classes.text}>You selected {props.rating} out of 5</p>
);
