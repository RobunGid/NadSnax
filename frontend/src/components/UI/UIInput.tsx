import clsx from 'clsx';
import { JSX } from 'react';
import { LanguageCodes } from '../../types';
import { UIFlagIcon } from './UIFlagIcon';

type UIInputProps = {
	error?: boolean;
	errorMessage?: string;
	isLoading?: boolean;
	isInvalid?: boolean;
	languageCode?: LanguageCodes;
} & Partial<JSX.IntrinsicElements['input']>;

export const UIInput = (props: UIInputProps) => {
	const {
		errorMessage,
		error,
		placeholder,
		isLoading,
		isInvalid,
		type,
		languageCode,
		...rest
	} = props;
	return (
		<label
			className={clsx(
				'relative flex flex-col-reverse w-full focus:shadow-lg has-focus:shadow-gray-900 shadow-lg',
				type === 'checkbox' &&
					'flex-row items-center justify-center px-2 shadow-none',
				type === 'file' && 'mb-10',
				(type === 'text' || !type) && 'cursor-text'
			)}
		>
			<input
				className={clsx(
					`h-10 block
				font-normal rounded-lg relative placeholder-transparent border-none outline-none
				peer dark:text-gray-300 text-gray-900 disabled:border-y-gray-900 disabled:border-4 w-full
				`,
					isLoading && 'cursor-progress',
					isInvalid && 'shadow-orange-800 ring-2 ring-orange-800 shadow-md',
					type === 'checkbox' && 'max-h-5 max-w-7 m-1',
					(type === 'text' || type === 'number' || !type) && 'pt-6 px-4 pb-3',
					type === 'file' &&
						`pt-2.5 px-3 w-full text-sm border border-gray-300 rounded-lg cursor-pointer bg-gray-50 
						dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
						before:absolute before:bg-gray-600/30 before:w-[89px] before:h-10 before:inset-0 before:flex before:items-center before:justify-center
						before:text-white hover:before:bg-gray-500/40 file:text-white file:gap-20`
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
					'',
					type === 'file' && 'top-10 left-1',
					type !== 'file' && 'left-4',
					type !== 'checkbox' &&
						`
					absolute bottom-[7px] font-normal transition-all pointer-events-none
					peer-focus:bottom-[22px] peer-focus:text-xs peer-focus:text-gray-700
					peer-[:not(:placeholder-shown)]:bottom-[22px] peer-[:not(:placeholder-shown)]:text-gray-700
					peer-[:not(:placeholder-shown)]:text-xs flex gap-2
					text-gray-600
					`,
					type === 'checkbox' && 'font-normal dark:text-gray-300 text-black'
				)}
			>
				{languageCode && <UIFlagIcon countryCode={languageCode} />}
				{placeholder}
			</p>
		</label>
	);
};
