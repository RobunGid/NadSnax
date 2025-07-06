import { useTranslate } from '../../../i18n/i18n';
import { withTranslate } from '../../../logic/withTranslate';

interface UIProductDetailsPriceProps {
	price: string;
	oldPrice?: string;
	translate: ReturnType<typeof useTranslate>;
}
export const UIProductDetailsPrice = withTranslate(
	({ price, oldPrice, translate }: UIProductDetailsPriceProps) => {
		return oldPrice && oldPrice != price ? (
			<div className='flex gap-2 m-4 items-center'>
				<div className='font-bold text-xl text-lime-600'>
					{translate('product_details.price.now')} {price}
				</div>
				<div className='font-bold text-md text-gray-500 line-through'>
					{oldPrice}
				</div>
			</div>
		) : (
			<div className='flex gap-2 m-4 items-center'>
				<div className='font-bold text-xl'>{price}</div>
			</div>
		);
	}
);
