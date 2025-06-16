import { ReactNode } from 'react';

interface UICartProps {
	children: ReactNode;
}

export const UICart = ({ children }: UICartProps) => {
	return (
		<div className='w-[20rem] md:w-[40rem] h-[40rem] overflow-auto mt-2'>
			<div className='grid md:grid-cols-[3fr_2fr_1fr] gap-5 min-w-0 grid-cols-3'>
				{children}
			</div>
		</div>
	);
};
