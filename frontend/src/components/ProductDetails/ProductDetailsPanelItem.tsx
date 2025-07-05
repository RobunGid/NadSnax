import { useTranslate } from '../../i18n/i18n';
import { withTranslate } from '../../logic/withTranslate';
import { ProductDetailsDropdown } from './ProductDetailsDropdown';

interface ProductDetailsPanelItemProps {
	text?: string;
	translate: ReturnType<typeof useTranslate>;
}

export const ProductDetailsPanelItem = {
	FullDescription: withTranslate(
		({ text, translate }: ProductDetailsPanelItemProps) => (
			<ProductDetailsDropdown
				text={translate('product_details.panel.full_description')}
			>
				{text}
			</ProductDetailsDropdown>
		)
	),
	Ingridients: withTranslate(({ text, translate }: ProductDetailsPanelItemProps) => (
		<ProductDetailsDropdown text={translate('product_details.panel.ingridients')}>
			{text}
		</ProductDetailsDropdown>
	)),
	Supplier: withTranslate(({ text, translate }: ProductDetailsPanelItemProps) => (
		<ProductDetailsDropdown text={translate('product_details.panel.supplier')}>
			{text}
		</ProductDetailsDropdown>
	)),
	Nutrition: withTranslate(({ text, translate }: ProductDetailsPanelItemProps) => (
		<ProductDetailsDropdown text={translate('product_details.panel.nutrition')}>
			{text}
		</ProductDetailsDropdown>
	)),
};
