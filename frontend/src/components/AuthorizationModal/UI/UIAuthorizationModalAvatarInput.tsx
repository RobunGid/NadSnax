import { ChangeEventHandler } from 'react';
import { useTranslate } from '../../../i18n/i18n';
import { withTranslate } from '../../../logic/withTranslate';
import { TaggedText } from '@ayub-begimkulov/i18n';
import styles from './UIAuthorizationModalAvatarInput.module.css';
import clsx from 'clsx';

interface UIAuthorizationModalAvatarInputProps {
	onChange: ChangeEventHandler<HTMLInputElement>;
	translate: ReturnType<typeof useTranslate>;
}

export const UIAuthorizationModalAvatarInput = withTranslate(
	({ onChange, translate }: UIAuthorizationModalAvatarInputProps) => {
		return (
			<div className='flex items-center justify-center w-full mb-4'>
				<label
					htmlFor='dropzone-file'
					className='flex flex-col items-center justify-center w-full h-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500'
				>
					<div className='flex flex-col items-center justify-center pt-5 pb-6'>
						<svg
							className='w-8 h-8 mb-4 text-gray-500 dark:text-gray-400'
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 20 16'
						>
							<path
								stroke='currentColor'
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='2'
								d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
							/>
						</svg>
						<p className='mb-2 text-sm text-gray-500 dark:text-gray-400 text-center'>
							<TaggedText
								text={translate(
									'authorization_modal.avatar_input.click_to_upload'
								)}
								tags={{
									1: (text) => (
										<span className='font-semibold'>{text}</span>
									),
									2: (text) => text,
								}}
							/>
						</p>
						<p className='text-xs text-gray-500 dark:text-gray-400'>
							{translate('authorization_modal.avatar_input.file_formats')}
						</p>
						<div className=' flex justify-center items-center text-center'>
							<input
								id='dropzone-file'
								type='file'
								className={clsx(
									styles['avatar-input'],
									'w-42 text-gray-500 dark:text-gray-400 text-sm'
								)}
								onChange={onChange}
							/>
						</div>
					</div>
				</label>
			</div>
		);
	}
);
