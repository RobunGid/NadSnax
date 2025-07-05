import { useTranslate } from '../../i18n/i18n';
import { withTranslate } from '../../logic/withTranslate';

interface UIProductDetailsSupplierProps {
	supplierLink: string;
	translate: ReturnType<typeof useTranslate>;
}

export const UIProductDetailsSupplier = withTranslate(
	({ supplierLink, translate }: UIProductDetailsSupplierProps) => {
		return (
			<div>
				<a
					href={supplierLink}
					target='_blank'
					className='font-thin underline underline-offset-2'
				>
					{translate('product_details.supplier_link')}
				</a>
			</div>
		);
	}
);
