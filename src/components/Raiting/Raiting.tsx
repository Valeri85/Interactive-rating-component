import { FC } from 'react';

import { RaitingProps } from './Raiting.model';
import classes from './Raiting.module.scss';

export const Raiting: FC<RaitingProps> = props => (
	<>
		<input
			className={classes.input}
			id={props.index}
			type="radio"
			name="rating"
			value={props.index}
			onClick={() => props.onRating(props.index)}
		/>
		<label className={classes.label} htmlFor={props.index}>
			{props.index}
		</label>
	</>
);
