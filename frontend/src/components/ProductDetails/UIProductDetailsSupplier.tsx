interface UIProductDetailsSupplierProps {
	supplierLink: string;
}

export const UIProductDetailsSupplier = ({
	supplierLink,
}: UIProductDetailsSupplierProps) => {
	return (
		<div>
			<a
				href={supplierLink}
				target='_blank'
				className='font-thin underline underline-offset-2'
			>
				Visit the supplier site
			</a>
		</div>
	);
};
