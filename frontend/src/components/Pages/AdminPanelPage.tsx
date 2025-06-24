import { useNavigate, useParams } from 'react-router';
import { predicateAdminPanelSection } from '../../types';
import { useEffect } from 'react';
import { UIAdminPanelPageContainer } from './UI/UIAdminPanelPageContainer';
import { AdminPanelMenu } from '../AdminPanel/AdminPanelMenu';
import { AdminPanelSection } from '../AdminPanel/AdminPanelSection';

export const AdminPanelPage = () => {
	const { section } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		if (!predicateAdminPanelSection(section)) {
			navigate('/admin-panel/statistics');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [section]);

	return (
		<UIAdminPanelPageContainer>
			{predicateAdminPanelSection(section) && <AdminPanelMenu />}
			{predicateAdminPanelSection(section) && (
				<AdminPanelSection section={section} />
			)}
		</UIAdminPanelPageContainer>
	);
};
