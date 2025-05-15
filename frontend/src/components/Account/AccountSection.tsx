import { ReactNode } from 'react';
import { Section } from '../../types';
import { AccountProfile } from './AccountProfile';
import { AccountSettings } from './Settings/AccountSettings';
import { UIAccountSection } from './UI/UIAccountSection';
import { AccountFavourites } from './Favourites/AccountFavourites';

interface AccountSectionProps {
	section: Section;
}

export const AccountSection = ({ section }: AccountSectionProps) => {
	const sections: Record<Section, ReactNode> = {
		settings: <AccountSettings />,
		profile: <AccountProfile />,
		help: <></>,
		order_history: <></>,
		recently_viewed: <></>,
		reviews: <></>,
		statistics: <></>,
		favourites: <AccountFavourites />,
	};

	return <UIAccountSection>{sections[section]}</UIAccountSection>;
};
