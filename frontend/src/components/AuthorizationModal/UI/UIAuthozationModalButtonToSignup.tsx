import { MouseEventHandler } from 'react';
import { useTranslate } from '../../../i18n/i18n';
import { withTranslate } from '../../../logic/withTranslate';

interface UIAuthozationModalButtonToSignupProps {
	onClick?: MouseEventHandler<HTMLButtonElement>;
	translate: ReturnType<typeof useTranslate>;
}

export const UIAuthozationModalButtonToSignup = withTranslate(
	({ onClick, translate }: UIAuthozationModalButtonToSignupProps) => {
		return (
			<div className='flex justify-center items-center gap-x-1'>
				{translate('authorization_modal.label.register')}
				<button onClick={onClick} className='text-sky-500 hover:underline'>
					{translate('authorization_modal.button.register')}
				</button>
			</div>
		);
	}
);
