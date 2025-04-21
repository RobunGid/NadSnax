interface UIProductDetailsFullLabelProps {
	children: string;
}
export const UIProductDetailsFullLabel = ({
	children,
}: UIProductDetailsFullLabelProps) => {
	return <div className='text-nowrap'>{children}</div>;
};
