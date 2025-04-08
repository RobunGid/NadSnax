import clsx from 'clsx';
import { ItemType } from '../../types';
import { UISidebarSelectOption } from './UI/UISidebarSelectOption';

interface SidebarSelectOptionsProps {
	className?: string;
	options: ItemType[];
}

export const SidebarSelectOptions = ({
	className,
	options,
}: SidebarSelectOptionsProps) => {
	return (
		<ul
			id='dropdown-snacks'
			className={clsx('transition-all pl-3 overflow-hidden space-y-2', className)}
		>
			{options.map((type) => (
				<UISidebarSelectOption
					text={type.name}
					to={type.pageLink}
					iconUrl={type.iconUrl}
					key={type.id}
				/>
			))}
		</ul>
	);
};
