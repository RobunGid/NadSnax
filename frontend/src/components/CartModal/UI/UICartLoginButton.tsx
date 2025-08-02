import { MouseEventHandler } from 'react';
import { useTranslate } from '../../../i18n/i18n';
import { withTranslate } from '../../../logic/withTranslate';
import { UIButton } from '../../UI/UIButton';

interface UICartLoginButtonProps {
	translate: ReturnType<typeof useTranslate>;
	onClick: MouseEventHandler<HTMLButtonElement>;
}

export const UICartLoginButton = withTranslate(
	({ translate, onClick }: UICartLoginButtonProps) => {
		return <UIButton onClick={onClick}>{translate('cart.login_button')}</UIButton>;
	}
);
