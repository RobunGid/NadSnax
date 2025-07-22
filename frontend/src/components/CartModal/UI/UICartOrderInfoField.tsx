import clsx from 'clsx';
import { PropsWithChildren } from 'react';

interface UICartOrderInfoFieldProps {
	type?: 'end' | 'start';
}

export const UICartOrderInfoField = ({
	children,
	type,
}: PropsWithChildren<UICartOrderInfoFieldProps>) => {
	return (
		<div
			className={clsx(
				type == 'end' && 'text-end',
				type == 'start' && 'text-start',
				'flex flex-row justify-between w-fit gap-2'
			)}
		>
			{children}
		</div>
	);
};
