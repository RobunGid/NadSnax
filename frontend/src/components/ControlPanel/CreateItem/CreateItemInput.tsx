import { ChangeEventHandler, ComponentProps, useState } from 'react';
import { UICreateItemInput } from './UI/UICreateItemInput';

export const CreateItemInput = ({
	config,
	languageCode,
}: ComponentProps<typeof UICreateItemInput>) => {
	const fixedName = languageCode ? `${config.name}_${languageCode}` : config.name;

	const [value, setValue] = useState<string>(sessionStorage.getItem(fixedName) || '');

	const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
		if (event.target.type !== 'file')
			sessionStorage.setItem(fixedName, event.target.value);
		setValue(event.target.value);
	};

	return (
		<UICreateItemInput
			key={config.name}
			config={{
				...config,
				name: fixedName,
				value,
				onChange: handleInputChange,
			}}
			languageCode={languageCode}
		/>
	);
};
