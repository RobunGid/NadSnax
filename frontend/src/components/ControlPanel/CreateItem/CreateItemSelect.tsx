import { ChangeEventHandler, ComponentProps, useState } from 'react';
import { UICreateItemSelect } from './UI/UICreateItemSelect';

type CreateItemSelectProps = ComponentProps<typeof UICreateItemSelect>;

export const CreateItemSelect = (props: CreateItemSelectProps) => {
	const [value, setValue] = useState<string>(
		sessionStorage.getItem(props.config.name) || ''
	);

	const handleSelectChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
		if (props.config.onChange) {
			props.config.onChange(event);
		}
		sessionStorage.setItem(props.config.name, event.target.value);
		setValue(event.target.value);
	};

	return (
		<UICreateItemSelect
			{...{
				...props,
				config: { ...props.config, value, onChange: handleSelectChange },
			}}
		/>
	);
};
