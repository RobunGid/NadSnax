import clsx from 'clsx';
import { JSX } from 'react';

type UIInputProps = {
	error?: boolean;
	errorMessage?: string;
	isLoading?: boolean;
	isInvalid?: boolean;
} & Partial<JSX.IntrinsicElements['input']>;

export const UIInput = (props: UIInputProps) => {
	const { errorMessage, error, placeholder, isLoading, isInvalid, type, ...rest } =
		props;
	return (
		<label
			className={clsx(
				'relative flex flex-col-reverse w-full focus:shadow-lg has-focus:shadow-gray-900 shadow-lg',
				type === 'checkbox' &&
					'flex-row items-center justify-center px-2 shadow-none'
			)}
		>
			<input
				className={clsx(
					`
				font-normal pt-6 px-4 pb-3 rounded-lg relative placeholder-transparent border-none outline-none
				peer dark:text-gray-300 text-gray-900 disabled:border-y-gray-900 disabled:border-4 size-5 w-full
				`,
					isLoading && 'cursor-progress',
					isInvalid && 'shadow-orange-800 ring-2 ring-orange-800 shadow-md',
					type === 'checkbox' ? 'max-h-5 max-w-7 block m-1' : 'h-10 w-10'
				)}
				{...rest}
				type={type}
				placeholder=' '
				disabled={isLoading}
			/>
			<p className='' data-error={error}>
				{errorMessage}
			</p>
			<p
				className={clsx(
					type !== 'checkbox' &&
						`
					absolute bottom-[7px] left-4 font-normal transition-all pointer-events-none
					peer-focus:bottom-[22px] peer-focus:text-xs peer-focus:text-gray-700
					peer-[:not(:placeholder-shown)]:bottom-[23px] peer-[:not(:placeholder-shown)]:text-gray-700
					peer-[:not(:placeholder-shown)]:text-sm
					text-gray-600
					`,
					type === 'checkbox' &&
						'font-normal dark:text-gray-300 text-black text-nowrap'
				)}
			>
				{placeholder}
			</p>
		</label>
	);
};
