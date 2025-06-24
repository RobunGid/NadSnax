import { AdminPanelMenuItem } from './AdminPanelMenuItem';
import { UIAdminPanelMenu } from './UI/UIAdminPanelMenu';

export const AdminPanelMenu = () => {
	return (
		<UIAdminPanelMenu>
			<AdminPanelMenuItem.Users />
			<AdminPanelMenuItem.Items />
			<AdminPanelMenuItem.Reviews />
			<AdminPanelMenuItem.Orders />
			<AdminPanelMenuItem.Statistics />
		</UIAdminPanelMenu>
	);
};
