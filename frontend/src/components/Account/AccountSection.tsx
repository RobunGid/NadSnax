import { ReactNode } from 'react';
import { Section } from '../../types';
import { AccountProfile } from './AccountProfile';
import { AccountSettings } from './Settings/AccountSettings';
import { UIAccountSection } from './UI/UIAccountSection';
import { AccountFavorites } from './Favorites/AccountFavorites';
import { AccountReviews } from './Reviews/AccountReviews';
import { AccountOrderHistory } from './OrderHistory/AccountOrderHistory';

interface AccountSectionProps {
	section: Section;
}

export const AccountSection = ({ section }: AccountSectionProps) => {
	const sections: Record<Section, ReactNode> = {
		settings: <AccountSettings />,
		profile: <AccountProfile />,
		help: <></>,
		order_history: <AccountOrderHistory />,
		recently_viewed: <></>,
		reviews: <AccountReviews />,
		statistics: <></>,
		favorites: <AccountFavorites />,
	};

	return <UIAccountSection>{sections[section]}</UIAccountSection>;
};
