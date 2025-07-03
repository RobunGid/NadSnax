import { useNavigate } from 'react-router';
import { deleteUser, signoutThunk, useAppDispatch } from '../../../store';
import { UIAccountSettingsDeleteButton } from './UI/UIAccountSettingsDeleteButton';
import { useTranslate } from '../../../i18n/i18n';

export const AccountSettingsDeleteButton = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const translate = useTranslate();

	const handleDeleteAccount = async () => {
		await dispatch(deleteUser());
		await dispatch(signoutThunk());
		navigate('/products');
	};

	return (
		<UIAccountSettingsDeleteButton onClick={handleDeleteAccount}>
			{translate('account.settings.delete_account')}
		</UIAccountSettingsDeleteButton>
	);
};
