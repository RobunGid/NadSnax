import { useNavigate, useParams } from 'react-router';
import { predicateControlPanelSection } from '../../types';
import { useEffect } from 'react';
import { ControlPanelMenu } from '../ControlPanel/ControlPanelMenu';
import { ControlPanelSection } from '../ControlPanel/ControlPanelSection';
import { UIControlPanelPageContainer } from './UI/UIControlPanelPageContainer';

export const ControlPanelPage = () => {
	const { section } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		if (!predicateControlPanelSection(section)) {
			navigate('/Control-panel/statistics');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [section]);

	return (
		<UIControlPanelPageContainer>
			{predicateControlPanelSection(section) && <ControlPanelMenu />}
			{predicateControlPanelSection(section) && (
				<ControlPanelSection section={section} />
			)}
		</UIControlPanelPageContainer>
	);
};
