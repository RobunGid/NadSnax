import { Dispatch, ReactNode, SetStateAction } from 'react';
import { UIModal } from '../../UI/UIModal';

interface UIAuthozationModalProps {
	children: ReactNode;
	setActive: Dispatch<SetStateAction<boolean>>;
	active: boolean;
}

export const UIAuthozationModal = ({
	children,
	setActive,
	active,
}: UIAuthozationModalProps) => {
	return (
		<UIModal setActive={setActive} active={active}>
			{children}
		</UIModal>
	);
};
