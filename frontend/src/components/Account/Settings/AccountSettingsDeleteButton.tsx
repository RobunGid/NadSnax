import { useNavigate } from 'react-router';
import { deleteUser, signoutThunk, useAppDispatch } from '../../../store';
import { UIAccountSettingsDeleteButton } from './UI/UIAccountSettingsDeleteButton';

export const AccountSettingsDeleteButton = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const handleDeleteAccount = async () => {
		await dispatch(deleteUser());
		await dispatch(signoutThunk());
		navigate('/products');
	};

	return (
		<UIAccountSettingsDeleteButton onClick={handleDeleteAccount}>
			Delete account
		</UIAccountSettingsDeleteButton>
	);
};
