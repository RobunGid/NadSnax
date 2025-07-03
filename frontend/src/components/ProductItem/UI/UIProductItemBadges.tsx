import { useTranslate } from '../../../i18n/i18n';
import { withTranslate } from '../../../logic/withTranslate';

interface UIProductItemBadgesProps {
	isSecretbox?: boolean;
	isBestseller?: boolean;
	translate: ReturnType<typeof useTranslate>;
}

export const UIProductItemBadges = withTranslate(
	({ isSecretbox, isBestseller, translate }: UIProductItemBadgesProps) => {
		return (
			<>
				{isSecretbox && (
					<div className='absolute bg-purple-300/70 px-2 text-purple-900 font-bold w-52 text-center rotate-[-45deg] top-[47px] left-[-45px]'>
						{translate('product_item.badges.secretbox')}
					</div>
				)}
				{isBestseller && (
					<div className='absolute bg-blue-200/70 px-2 text-blue-900 font-bold w-40 text-center -rotate-45 top-[25px] left-[-45px]'>
						{translate('product_item.badges.bestseller')}
					</div>
				)}
			</>
		);
	}
);
