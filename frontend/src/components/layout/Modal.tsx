import clsx from 'clsx';
import { Dispatch, ReactNode, SetStateAction } from 'react';
import { createPortal } from 'react-dom';
import { RxCross1 } from 'react-icons/rx';

interface ModalProps {
	active: boolean;
	setActive: Dispatch<SetStateAction<boolean>>;
	children: ReactNode;
}

export const Modal = ({ active, setActive, children }: ModalProps) => {
	return createPortal(
		<div
			className={clsx(
				active
					? 'opacity-100 pointer-events-auto'
					: 'opacity-0 pointer-events-none',
				'h-screen w-screen bg-black bg-opacity-40 fixed inset-0 z-50 flex items-center justify-center transition-opacity'
			)}
			onClick={() => setActive(false)}
		>
			<div
				className={clsx(
					'p-5 rounded-xl bg-white dark:bg-slate-800 transition-transform',
					active ? 'scale-100' : 'scale-50'
				)}
				onClick={(event) => event.stopPropagation()}
			>
				<button
					className='absolute top-3 right-3 hover:scale-110'
					onClick={() => setActive(false)}
				>
					<RxCross1 />
				</button>
				{children}
			</div>
		</div>,
		document.body
	);
};
