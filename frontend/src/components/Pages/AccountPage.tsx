import { useNavigate, useParams } from 'react-router';
import { AccountMenu } from '../Account/AccountMenu';
import { AccountSection } from '../Account/AccountSection';
import { useEffect } from 'react';
import { predicateSection } from '../../types';
import { UIAccountPageContainer } from './UI/UIAccountPageContainer';

export const AccountPage = () => {
	const { section } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		if (!predicateSection(section)) {
			navigate('/account/profile');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [section]);

	return (
		<UIAccountPageContainer>
			{predicateSection(section) && <AccountMenu />}
			{predicateSection(section) && <AccountSection section={section} />}
		</UIAccountPageContainer>
	);
};
