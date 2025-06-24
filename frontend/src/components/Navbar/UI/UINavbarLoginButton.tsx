import clsx from 'clsx';
import { ReactNode } from 'react';
import { BiUser } from 'react-icons/bi';
import { JSX } from 'react';

type UINavbarLoginButtonProps = {
	children: ReactNode;
	className?: string;
} & Partial<JSX.IntrinsicElements['button']>;

export const UINavbarLoginButton = (props: UINavbarLoginButtonProps) => {
	const { className, children } = props;
	return (
		<button
			className={clsx(
				'flex p-[6px] m-2 bg-transparent dark:bg-transparent hover:scale-105 transition-transform',
				className
			)}
			{...props}
		>
			<BiUser />
			{children}
		</button>
	);
};
