import { useNavigate, useParams } from 'react-router';
import { AccountMenu } from '../Account/AccountMenu';
import { AccountSection } from '../Account/AccountSection';
import { useEffect } from 'react';
import { predicateSection } from '../../types';

export const AccountPage = () => {
	const { section } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		if (!predicateSection(section)) {
			navigate('/account');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [section]);

	return (
		<div className='p-8 flex gap-8 flex-col lg:flex-row'>
			<AccountMenu />
			{predicateSection(section) && <AccountSection section={section} />}
		</div>
	);
};
