import clsx from 'clsx';
import { LanguageCodes } from '../../types';

interface UIFlagIcon {
	countryCode: LanguageCodes;
	className?: string;
}

export const UIFlagIcon = ({ countryCode, className }: UIFlagIcon) => {
	switch (countryCode) {
		case 'en':
			return (
				<img
					src='https://hatscripts.github.io/circle-flags/flags/us.svg'
					className={clsx(`size-5 rounded-full inline`, className)}
				/>
			);
		case 'ru':
			return (
				<img
					src='https://hatscripts.github.io/circle-flags/flags/ru.svg'
					className={clsx(`size-5 rounded-full inline`, className)}
				/>
			);
	}
};
