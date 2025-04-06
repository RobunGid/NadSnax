import { ReactNode } from 'react';
import { Section } from '../../types';
import { AccountProfile } from './AccountProfile';
import { AccountSettings } from './AccountSettings';
import { UIAccountSection } from '../UI/UIAccountSection';

interface AccountSectionProps {
	section: Section;
}

export const AccountSection = ({ section }: AccountSectionProps) => {
	const sections: Record<Exclude<Section, undefined>, ReactNode> = {
		settings: <AccountSettings />,
		profile: <AccountProfile />,
		help: <></>,
		order_history: <></>,
		recently_viewed: <></>,
		reviews: <></>,
		signout: <></>,
		statistics: <></>,
	};

	if (section == undefined) {
		return <>test</>;
	} else {
		return <UIAccountSection>{sections[section]}</UIAccountSection>;
	}
};
