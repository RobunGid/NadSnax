import { useTranslate } from '../../../i18n/i18n';
import { withTranslate } from '../../../logic/withTranslate';

interface UICartTitleProps {
	translate: ReturnType<typeof useTranslate>;
}

export const UICartTitle = withTranslate(({ translate }: UICartTitleProps) => {
	return (
		<h1 className='text-center text-xl font-semibold col-span-3'>
			{translate('cart.title')}
		</h1>
	);
});
