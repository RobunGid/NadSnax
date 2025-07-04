export const UIProductDetailsTextArea = () => {
	return (
		<textarea
			className='resize-none shadow-lg outline-none p-4'
			placeholder='Tell us about your opinion!'
			name='text'
			maxLength={160}
		></textarea>
	);
};
