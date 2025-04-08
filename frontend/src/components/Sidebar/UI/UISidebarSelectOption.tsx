import { SidebarItemContainer } from '../SidebarItemContainer';

interface UISidebarSelectOptionProps {
	to: string;
	text: string;
	iconUrl: string;
}

export const UISidebarSelectOption = ({
	to,
	iconUrl,
	text,
}: UISidebarSelectOptionProps) => {
	return (
		<SidebarItemContainer to={to}>
			<img src={iconUrl} alt={`${text} icon`} className='size-6'></img>
			<span className='pl-5'>{text}</span>
		</SidebarItemContainer>
	);
};
