import { FC, useState } from 'react';

import { Raiting } from '../Raiting/Raiting';

import { FormProps } from './Form.model';
import classes from './Form.module.scss';

export const Form: FC<FormProps> = props => {
	const [selectRating, setSelectRating] = useState<string>('');

	const handleRating = (ratingIndex: string): void =>
		setSelectRating(ratingIndex);

	return (
		<form
			className={classes.form}
			onSubmit={event => props.onSubmitRating(event, selectRating)}
		>
			<fieldset>
				{[...Array<number>(5)].map((_, index) => {
					const inputValue: string = (index + 1).toString();
					return (
						<Raiting
							key={inputValue}
							index={inputValue}
							onRating={handleRating}
						/>
					);
				})}
			</fieldset>
			<button type="submit">Submit</button>
		</form>
	);
};
