import clsx from 'clsx';
import { ReactNode } from 'react';

type UIInputProps = {
	children?: ReactNode;
	error?: boolean;
	errorMessage?: string;
	isLoading?: boolean;
	isInvalid?: boolean;
} & Partial<JSX.IntrinsicElements['input']>;

export const UIInput = (props: UIInputProps) => {
	const { errorMessage, error, placeholder, isLoading, isInvalid, ...rest } = props;
	return (
		<label className='relative flex flex-col-reverse '>
			<input
				className={clsx(
					`
				mb-2.5 w-full h-10 font-normal pt-5 px-4 pb-5 rounded-lg relative placeholder-transparent border-none outline-none
				focus:shadow-lg focus:shadow-gray-900
				peer shadow-lg dark:text-gray-300 text-gray-900 disabled:border-y-gray-900 disabled:border-4
				`,
					isLoading && 'cursor-progress',
					isInvalid && 'shadow-orange-800 ring-2 ring-orange-800 shadow-md'
				)}
				{...rest}
				placeholder=' '
				disabled={isLoading}
			/>
			<p className='' data-error={error}>
				{errorMessage}
			</p>
			<p
				className={`
					absolute bottom-[18px] left-4 font-normal transition-all pointer-events-none
					peer-focus:bottom-8 peer-focus:text-xs peer-focus:text-gray-700
					peer-placeholder-shown:opacity-100 opacity-0 text-gray-600
					`}
			>
				{placeholder}
			</p>
		</label>
	);
};
