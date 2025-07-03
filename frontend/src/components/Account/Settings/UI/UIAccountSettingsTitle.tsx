import { useTranslate } from '../../../../i18n/i18n';
import { withTranslate } from '../../../../logic/withTranslate';

interface UIAccountSettingsTitleProps {
	translate: ReturnType<typeof useTranslate>;
}

export const UIAccountSettingsTitle = withTranslate(
	({ translate }: UIAccountSettingsTitleProps) => {
		return (
			<div className='text-xl border-b-2 dark:border-gray-700 pb-2 w-full'>
				<h2>{translate('account.settings.title')}</h2>
			</div>
		);
	}
);
