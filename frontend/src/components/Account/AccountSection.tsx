import { Section } from '../../types';
import { AccountSettings } from './AccountSettings';

interface AccountSectionProps {
	section: Section;
}

export const AccountSection = ({ section }: AccountSectionProps) => {
	switch (section) {
		case 'settings':
			return <AccountSettings />;

		default:
			return <></>;
	}
};
