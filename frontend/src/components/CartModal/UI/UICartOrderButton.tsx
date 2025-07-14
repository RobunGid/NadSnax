import { MouseEventHandler } from 'react';
import { UIButton } from '../../UI/UIButton';
import { useTranslate } from '@ayub-begimkulov/i18n';
import { withTranslate } from '../../../logic/withTranslate';

interface UICartOrderButtonProps {
	onClick: MouseEventHandler<HTMLButtonElement>;
	translate: ReturnType<typeof useTranslate>;
}

export const UICartOrderButton = withTranslate(
	({ onClick, translate }: UICartOrderButtonProps) => {
		return (
			<UIButton onClick={onClick} className='h-14'>
				{translate('cart.order_button')}
			</UIButton>
		);
	}
);
