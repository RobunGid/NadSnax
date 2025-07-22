import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import { BiUser } from 'react-icons/bi';
import { JSX } from 'react';

type UINavbarLoginButtonProps = {
	className?: string;
} & Partial<JSX.IntrinsicElements['button']>;

export const UINavbarLoginButton = ({
	className,
	children,
	...rest
}: PropsWithChildren<UINavbarLoginButtonProps>) => {
	return (
		<button
			className={clsx(
				'flex p-[6px] m-2 bg-transparent dark:bg-transparent hover:scale-105 transition-transform',
				className
			)}
			{...rest}
		>
			<BiUser />
			{children}
		</button>
	);
};
