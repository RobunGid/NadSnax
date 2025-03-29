import { Section } from '../../types';

interface AccountSectionProps {
	section: Section;
}

export const AccountSection = ({ section }: AccountSectionProps) => {
	return <div>{section}</div>;
};
