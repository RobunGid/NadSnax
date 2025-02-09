import { ComponentProps, FC } from 'react';
import logo from '../../assets/logo.png';
import clsx from 'clsx';

interface SiteLogoProps {
	className?: ComponentProps<'img'>['className'];
}

export const SiteLogo: FC<SiteLogoProps> = ({ className }) => {
	return <img src={logo} alt='logo' className={clsx('px-2 w-20', className)} />;
};
