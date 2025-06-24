import { useNavigate, useParams } from 'react-router';
import { predicateAdminPanelSection } from '../../types';
import { useEffect } from 'react';
import { UIAdminPanelPageContainer } from './UI/UIAdminPanelPageContainer';

export const AdminPanelPage = () => {
	const { section } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		if (!predicateAdminPanelSection(section)) {
			navigate('/admin-panel/statistics');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [section]);

	return <UIAdminPanelPageContainer>123</UIAdminPanelPageContainer>;
};
