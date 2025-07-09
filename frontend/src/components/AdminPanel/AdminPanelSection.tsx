import { ReactNode } from 'react';
import { AdminPanelSectionType } from '../../types';
import { UIAdminSectionContainer } from './UI/UIAdminSectionContainer';
import { AdminStatistics } from './Statistics/AdminStatistics';

interface AdminPanelSectionProps {
	section: AdminPanelSectionType;
}

export const AdminPanelSection = ({ section }: AdminPanelSectionProps) => {
	const sections: Record<AdminPanelSectionType, ReactNode> = {
		create_item: <></>,
		items: <></>,
		users: <></>,
		orders: <></>,
		reviews: <></>,
		statistics: <AdminStatistics />,
	};

	return <UIAdminSectionContainer>{sections[section]}</UIAdminSectionContainer>;
};
