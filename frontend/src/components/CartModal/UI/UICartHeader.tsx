import { useTranslate } from '../../../i18n/i18n';
import { withTranslate } from '../../../logic/withTranslate';

interface UICartHeaderProps {
	translate: ReturnType<typeof useTranslate>;
}

export const UICartHeader = withTranslate(({ translate }: UICartHeaderProps) => {
	return (
		<>
			<div className='text-gray-500 text-xs text-center hidden md:block'>
				{translate('cart.title.item')}
			</div>
			<div className='text-gray-500 text-xs hidden md:block ms-13'>
				{translate('cart.title.quantity')}
			</div>
			<div className='text-gray-500 text-xs text-left hidden md:block'>
				{translate('cart.title.total')}
			</div>
		</>
	);
});
