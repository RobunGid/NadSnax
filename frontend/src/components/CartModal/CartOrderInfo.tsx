import { useStateSelector } from '../../store';
import { UICartOrderInfo } from './UI/UICartOrderInfo';
import { UICartOrderInfoTitle } from './UI/UICartOrderInfoTitle';

export const CartOrderInfo = () => {
	const user = useStateSelector((state) => state.user.user);
	return (
		<UICartOrderInfo>
			<UICartOrderInfoTitle size='big'>Customer information</UICartOrderInfoTitle>
			<UICartOrderInfoTitle>
				{'Full name: '}
				<strong>
					{user?.firstName} {user?.lastName}
				</strong>
			</UICartOrderInfoTitle>
			<UICartOrderInfoTitle>
				Order pickup point: <strong>Standard</strong>
			</UICartOrderInfoTitle>
		</UICartOrderInfo>
	);
};
