import { ReactNode } from 'react';
import { Section } from '../../types';
import { UIAccountSection } from '../UI/UIAccountSection';
import { AccountProfile } from './AccountProfile';
import { AccountSettings } from './AccountSettings';

interface AccountSectionProps {
	section: Section;
}

export const AccountSection = ({ section }: AccountSectionProps) => {
	let sectionElement: ReactNode;
	switch (section) {
		case 'settings':
			sectionElement = <AccountSettings />;
			break;
		case 'profile':
			sectionElement = <AccountProfile />;
			break;

		default:
			<></>;
	}
	return <UIAccountSection>{sectionElement}</UIAccountSection>;
};
