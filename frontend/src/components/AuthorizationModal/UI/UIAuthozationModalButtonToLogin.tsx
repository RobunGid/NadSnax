import { useTranslate } from '@ayub-begimkulov/i18n';
import { MouseEventHandler } from 'react';
import { withTranslate } from '../../../logic/withTranslate';

interface UIAuthozationModalButtonToLoginProps {
	onClick?: MouseEventHandler<HTMLButtonElement>;
	translate: ReturnType<typeof useTranslate>;
}

export const UIAuthozationModalButtonToLogin = withTranslate(
	({ onClick, translate }: UIAuthozationModalButtonToLoginProps) => {
		return (
			<div className='flex justify-center items-center gap-x-1'>
				{translate('authorization_modal.label.login')}
				<button onClick={onClick} className='text-sky-500 hover:underline'>
					{translate('authorization_modal.button.login')}
				</button>
			</div>
		);
	}
);
