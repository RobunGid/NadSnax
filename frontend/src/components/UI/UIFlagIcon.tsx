import clsx from 'clsx';
import styles from './UIFlagIcon.module.css';

interface UIFlagIcon {
	countryCode: string;
	className?: string;
}

export const UIFlagIcon = ({ countryCode, className }: UIFlagIcon) => {
	if (countryCode === 'en') {
		countryCode = 'us';
	}
	return (
		<span
			className={clsx(
				`fi fis inline-block mr-2 fi-${countryCode} ${styles.fiCircle}`,
				className
			)}
		/>
	);
};
