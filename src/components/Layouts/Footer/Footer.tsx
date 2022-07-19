import { FC } from 'react';

import classes from './Footer.module.scss';

export const Footer: FC = _ => (
	<footer className={classes.footer}>
		<p>
			Challenge by
			<a
				href="https://www.frontendmentor.io?ref=challenge"
				target="_blank"
			>
				{' '}
				Frontend Mentor
			</a>
			.
		</p>
		<p>
			Coded by
			<a
				href="https://www.frontendmentor.io/profile/Valeri85"
				target="_blank"
			>
				{' '}
				Valeri
			</a>
			.
		</p>
	</footer>
);
