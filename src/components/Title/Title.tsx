import { FC } from 'react';

import { TitleProps } from './Title.model';
import classes from './Title.module.scss';

export const Title: FC<TitleProps> = props => (
	<h1
		className={
			props.className === 'mainTitle'
				? classes.mainTitle
				: classes.secondaryTitle
		}
		id="mainTitle"
	>
		{props.title}
	</h1>
);
