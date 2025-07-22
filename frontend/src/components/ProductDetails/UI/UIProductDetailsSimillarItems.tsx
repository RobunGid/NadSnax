import { PropsWithChildren } from 'react';
import { withTranslate } from '../../../logic/withTranslate';
import { useTranslate } from '../../../i18n/i18n';

interface UIProductDetailsSimillarItemsProps {
	translate: ReturnType<typeof useTranslate>;
}

export const UIProductDetailsSimillarItems = withTranslate(
	({ children, translate }: PropsWithChildren<UIProductDetailsSimillarItemsProps>) => {
		return (
			<div className='p-5 flex flex-col md:block'>
				<span className='text-2xl font-bold dark:text-gray-300 block my-4'>
					{translate('product_details.simillar_items.title')}
				</span>

				<div className='flex gap-4 flex-wrap justify-center'>{children}</div>
			</div>
		);
	}
);
