import { ReactNode } from 'react';

type UIAuthozationModalInputProps = {
	children?: ReactNode;
	error?: boolean;
	errorMessage?: string;
} & Partial<JSX.IntrinsicElements['input']>;

export const UIAuthozationModalInput = (props: UIAuthozationModalInputProps) => {
	const { errorMessage, error, placeholder } = props;
	return (
		<label className='relative flex flex-col-reverse '>
			<input
				className={`
				mb-2.5 w-72 h-10 font-normal pt-5 px-4 pb-5 rounded-lg border-none relative placeholder-transparent  outline-none
				focus:shadow-lg focus:shadow-gray-900
				invalid:outline-red-800 invalid:outline-4
				peer shadow-lg dark:text-gray-300 text-gray-900
				`}
				{...props}
			/>
			<p className='' data-error={error}>
				{errorMessage}
			</p>
			<p
				className={`
					opacity-0 absolute bottom-[18px] left-4 font-normal transition-all  pointer-events-none
					peer-focus:bottom-8 peer-focus:text-xs peer-focus:text-gray-700
					peer-placeholder-shown:opacity-100 text-gray-600
					`}
			>
				{placeholder}
			</p>
		</label>
	);
};
