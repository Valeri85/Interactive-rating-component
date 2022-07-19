import { FC } from 'react';

import { TextProps } from './Text.model';
import classes from './Text.module.scss';

export const Text: FC<TextProps> = props => (
	<p className={props.className === 'thankYou' ? classes.thankYou : ''}>
		{props.children}
	</p>
);
