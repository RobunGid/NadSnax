import { ReactNode } from 'react';
import { Section } from '../../types';
import { AccountProfile } from './AccountProfile';
import { AccountSettings } from './AccountSettings';
import { UIAccountSection } from './UI/UIAccountSection';
import { AccountEditProfile } from './AccountEditProfile';

interface AccountSectionProps {
	section: Section;
}

export const AccountSection = ({ section }: AccountSectionProps) => {
	const sections: Record<Section, ReactNode> = {
		settings: <AccountSettings />,
		profile: <AccountProfile />,
		edit_profile: <AccountEditProfile />,
		help: <></>,
		order_history: <></>,
		recently_viewed: <></>,
		reviews: <></>,
		statistics: <></>,
		favourites: <></>,
	};

	return <UIAccountSection>{sections[section]}</UIAccountSection>;
};
