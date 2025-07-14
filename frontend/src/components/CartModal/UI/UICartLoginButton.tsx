import { useTranslate } from '../../../i18n/i18n';
import { withTranslate } from '../../../logic/withTranslate';
import { UIButton } from '../../UI/UIButton';

interface UICartLoginButtonProps {
	translate: ReturnType<typeof useTranslate>;
}

export const UICartLoginButton = withTranslate(
	({ translate }: UICartLoginButtonProps) => {
		return <UIButton>{translate('cart.login_button')}</UIButton>;
	}
);
