import { useTranslate } from '../../../i18n/i18n';
import { withTranslate } from '../../../logic/withTranslate';

interface UIAuthorizationModalTitleProps {
	translate: ReturnType<typeof useTranslate>;
	type: 'login' | 'register';
}

export const UIAuthorizationModalTitle = withTranslate(
	({ translate, type }: UIAuthorizationModalTitleProps) => {
		return (
			<div className='text-lg text-center'>
				{type == 'login'
					? translate('authorization_modal.title.login')
					: translate('authorization_modal.title.register')}
			</div>
		);
	}
);
