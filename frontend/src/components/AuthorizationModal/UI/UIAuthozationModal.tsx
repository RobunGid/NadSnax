import { Dispatch, PropsWithChildren, SetStateAction } from 'react';
import { UIModal } from '../../UI/UIModal';

interface UIAuthozationModalProps {
	setActive: Dispatch<SetStateAction<boolean>>;
	active: boolean;
}

export const UIAuthozationModal = ({
	children,
	setActive,
	active,
}: PropsWithChildren<UIAuthozationModalProps>) => {
	return (
		<UIModal setActive={setActive} active={active}>
			{children}
		</UIModal>
	);
};
