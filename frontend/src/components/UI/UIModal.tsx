import clsx from 'clsx';
import { Dispatch, PropsWithChildren, SetStateAction } from 'react';
import { createPortal } from 'react-dom';
import { RxCross1 } from 'react-icons/rx';

interface UIModalProps {
	active?: boolean;
	setActive: Dispatch<SetStateAction<boolean>>;
	className?: string;
}

export const UIModal = ({
	active,
	setActive,
	children,
	className,
}: PropsWithChildren<UIModalProps>) => {
	return createPortal(
		<div
			className={clsx(
				active
					? 'opacity-100 pointer-events-auto'
					: 'opacity-0 pointer-events-none',
				'h-screen w-screen bg-black/40 fixed inset-0 z-50 flex items-center justify-center transition-opacity',
				className
			)}
			onClick={() => setActive(false)}
		>
			<div
				className={clsx(
					'p-5 rounded-xl bg-white dark:bg-slate-800 transition-transform m-8',
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
