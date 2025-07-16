import { ReactNode } from 'react';
import { ControlPanelSectionType } from '../../types';
import { UIControlSectionContainer } from './UI/UIControlSectionContainer';
import { StatisticsSection } from './Statistics/StatisticsSection';
import { CreateItemSection } from './CreateItem/CreateItemSection';

interface ControlPanelSectionProps {
	section: ControlPanelSectionType;
}

export const ControlPanelSection = ({ section }: ControlPanelSectionProps) => {
	const sections: Record<ControlPanelSectionType, ReactNode> = {
		'create-item': <CreateItemSection />,
		items: <></>,
		users: <></>,
		orders: <></>,
		reviews: <></>,
		statistics: <StatisticsSection />,
	};

	return <UIControlSectionContainer>{sections[section]}</UIControlSectionContainer>;
};
