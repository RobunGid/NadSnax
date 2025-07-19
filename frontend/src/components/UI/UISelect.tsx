import { JSX } from 'react';
import { ChangeEventHandler } from 'react';
import { Option } from '../../types';

type UISelectProps = {
	text?: string;
	options: Option[];
	onChange?: ChangeEventHandler<HTMLSelectElement>;
} & JSX.IntrinsicElements['select'];

export const UISelect = (props: UISelectProps) => {
	const { options, value, onChange, text, ...attributes } = props;
	return (
		<select
			className='focus:outline-gray-500 focus:outline-1 block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
			{...attributes}
			onChange={onChange}
			value={value}
		>
			<option defaultChecked>{text}</option>
			{options.map((option) => (
				<option value={option.value} key={option.value}>
					{option.text}
				</option>
			))}
		</select>
	);
};
