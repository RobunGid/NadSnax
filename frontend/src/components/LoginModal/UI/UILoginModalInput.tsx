import { ReactNode } from 'react';

type UILoginModalInputProps = {
	children?: ReactNode;
	error?: boolean;
	errorMessage?: string;
} & Partial<JSX.IntrinsicElements['input']>;

export const UILoginModalInput = (props: UILoginModalInputProps) => {
	const { errorMessage, error, placeholder } = props;
	return (
		<label className='relative flex flex-col-reverse'>
			<input
				className={`
				mb-2.5 w-72 h-10 font-normal pt-5 px-4 pb-5 rounded-lg border-none relative placeholder-transparent text-black outline-none
				focus:shadow-lg focus:shadow-black
				invalid:outline-red-800 invalid:outline-4
				peer
				`}
				{...props}
			/>
			<p className='' data-error={error}>
				{errorMessage}
			</p>
			<p
				className={`
					opacity-0 absolute bottom-[18px] left-4 font-normal transition-all text-black pointer-events-none
					peer-focus:bottom-8 peer-focus:text-sm peer-focus:text-gray-500
					peer-placeholder-shown:opacity-100 
					`}
			>
				{placeholder}
			</p>
		</label>
	);
};
