import { itemActions, useActionCreators, useStateSelector } from '../../store';
import { UIProductsPageSelectorButton } from './UI/UIProductsPageSelectorButton';

export const ProductsPageSelector = () => {
	const totalItems = useStateSelector((state) => state.item.totalItems);
	const currentPage = useStateSelector((state) => state.item.currentItemPage);
	const actions = useActionCreators({ setItemPage: itemActions.setItemPage });
	const buttons = [];
	for (let i = 0; i < Math.ceil(totalItems / 10); i++) {
		buttons.push(
			<UIProductsPageSelectorButton
				pageNumber={i + 1}
				isCurrent={i === currentPage}
				key={i}
				onClick={() => actions.setItemPage(i)}
			/>
		);
	}
	return buttons;
};
