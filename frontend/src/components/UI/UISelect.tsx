import { JSX } from 'react';
import { ChangeEventHandler } from 'react';
import clsx from 'clsx';
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
			value={value}
			onChange={onChange}
			className='outline-none border-1 border-gray-500 rounded-md px-2 py-1 invalid:border-2 invalid:border-gray-700'
			{...attributes}
		>
			<option disabled>{text}</option>
			{options.map((option) => (
				<option {...option} className={clsx('bg-gray-800')}>
					{option.text}
				</option>
			))}
		</select>
	);
};
