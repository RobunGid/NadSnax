import clsx from 'clsx';
import { SidebarItemContainer } from './SidebarItemContainer';
import { ItemType } from '../../types';

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
				<SidebarItemContainer to={type.pageLink} key={type.id}>
					<img
						src={type.iconUrl}
						alt={`${type.name} icon`}
						className='size-6'
					></img>
					<span className='pl-5'>{type.name}</span>
				</SidebarItemContainer>
			))}
		</ul>
	);
};
