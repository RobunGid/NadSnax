import { Item } from '../../types';
import { ProductItem } from '../ProductItem/ProductItem';

interface SimillarItemsProps {
	items: Item[];
}

export const SimillarItems = ({ items }: SimillarItemsProps) => {
	return (
		<ul className='flex pt-3 gap-4 flex-wrap justify-center md:justify-start'>
			{items.map((item) => (
				<li key={item.id}>
					<ProductItem item={item} hideAddButton={true} />
				</li>
			))}
		</ul>
	);
};
