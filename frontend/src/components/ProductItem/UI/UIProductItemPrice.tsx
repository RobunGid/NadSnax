import { useTranslate } from '../../../i18n/i18n';
import { withTranslate } from '../../../logic/withTranslate';

interface UIProductItemPriceProps {
	price: string;
	oldPrice?: string;
	discount: number;
	translate: ReturnType<typeof useTranslate>;
}

export const UIProductItemPrice = withTranslate(
	({ price, oldPrice, discount, translate }: UIProductItemPriceProps) => {
		return (
			<div className='flex gap-x-1.5 items-center'>
				{oldPrice ? (
					<>
						<div className='font-bold text-lg text-lime-600'>
							{translate('product_details.price.now')} {price}
						</div>
						<div className='text-sm text-gray-400 line-through'>
							{oldPrice}
						</div>
						<div className='text-sm text-lime-500'>-{discount}%</div>
					</>
				) : (
					<div className='font-bold text-lg'>{price}</div>
				)}
			</div>
		);
	}
);
