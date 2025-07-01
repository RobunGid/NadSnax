import styles from './UIFlagIcon.module.css';

interface UIFlagIcon {
	countryCode: string;
}

export const UIFlagIcon = ({ countryCode }: UIFlagIcon) => {
	if (countryCode === 'en') {
		countryCode = 'us';
	}
	return (
		<span
			className={`fi fis  inline-block mr-2 fi-${countryCode} ${styles.fiCircle}`}
		/>
	);
};
