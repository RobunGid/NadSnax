import { ReactNode } from 'react';
import { ControlPanelSectionType } from '../../types';
import { UIControlSectionContainer } from './UI/UIControlSectionContainer';
import { AdminStatistics } from './Statistics/AdminStatistics';

interface ControlPanelSectionProps {
	section: ControlPanelSectionType;
}

export const ControlPanelSection = ({ section }: ControlPanelSectionProps) => {
	const sections: Record<ControlPanelSectionType, ReactNode> = {
		'create-item': <></>,
		items: <></>,
		users: <></>,
		orders: <></>,
		reviews: <></>,
		statistics: <AdminStatistics />,
	};

	return <UIControlSectionContainer>{sections[section]}</UIControlSectionContainer>;
};
