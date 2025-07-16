import { ControlPanelMenuItem } from './ControlPanelMenuItem';
import { UIControlPanelMenu } from './UI/UIControlPanelMenu';

export const ControlPanelMenu = () => {
	return (
		<UIControlPanelMenu>
			<ControlPanelMenuItem.CreateItem />
			<ControlPanelMenuItem.Statistics />
			<ControlPanelMenuItem.Users />
			<ControlPanelMenuItem.Items />
			<ControlPanelMenuItem.Reviews />
			<ControlPanelMenuItem.Orders />
		</UIControlPanelMenu>
	);
};
