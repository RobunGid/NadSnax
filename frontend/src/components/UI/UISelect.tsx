import { ChangeEventHandler, Fragment } from 'react';
import { Option } from '../../logic/orderInfoConfig';
import clsx from 'clsx';

interface UISelectProps {
	options: Option[];
	value: string;
	onChange: ChangeEventHandler<HTMLSelectElement>;
}

export const UISelect = ({ options, value, onChange }: UISelectProps) => {
	return (
		<select
			value={value}
			onChange={onChange}
			className='outline-none border-1 border-gray-500 rounded-md px-2 py-1 invalid:border-2 invalid:border-gray-700'
			required
		>
			{options.map((option) => (
				<Fragment key={option.value}>
					<option {...option} className={clsx('bg-gray-800')}>
						{option.text}
					</option>
				</Fragment>
			))}
		</select>
	);
};
