import { ComponentProps } from 'react';
import logo from '../../assets/logo.png';
import clsx from 'clsx';

interface UISiteLogoProps {
	className?: ComponentProps<'img'>['className'];
}

export const UISiteLogo = ({ className }: UISiteLogoProps) => {
	return <img src={logo} alt='logo' className={clsx('px-2 w-20', className)} />;
};
