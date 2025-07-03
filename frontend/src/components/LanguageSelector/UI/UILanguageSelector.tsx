import { MouseEventHandler, Ref } from 'react';
import { UIFlagIcon } from '../../UI/UIFlagIcon';
import { IoIosArrowDown } from 'react-icons/io';
import clsx from 'clsx';
import { Language } from '../../../types';

interface UILanguageSelectorProps {
	ref: Ref<HTMLDivElement>;
	selectedLanguage: Language;
	handleLanguageChange: (language: Language) => void;
	handleToggleVisibility: MouseEventHandler<HTMLButtonElement>;
	languages: Language[];
	isOpen: boolean;
}

export const UILanguageSelector = ({
	ref,
	selectedLanguage,
	handleToggleVisibility,
	languages,
	isOpen,
	handleLanguageChange,
}: UILanguageSelectorProps) => {
	return (
		<div className='flex items-center z-40' ref={ref}>
			<div className='relative inline-block text-left'>
				<div>
					<button
						onClick={handleToggleVisibility}
						className={`inline-flex items-center justify-center w-full rounded-md border border-gray-300 dark:border-gray-600 
								shadow-xl px-4 py-2 bg-white dark:bg-gray-500 text-sm font-medium text-gray-700 dark:text-gray-200 
								hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 ring-gray-700`}
					>
						<UIFlagIcon countryCode={selectedLanguage.key} />
						{selectedLanguage.name}
						<IoIosArrowDown size='16' />
					</button>
				</div>
				<div
					className={clsx(
						'max-h-0 duration-200 overflow-hidden absolute right-0 mt-2 w-34 rounded-md shadow-lg bg-white dark:bg-gray-500 transition-[max-height]',
						isOpen && 'max-h-24 ring-2 dark:ring-gray-800 ring-gray-400'
					)}
				>
					<div className='grid grid-cols-1 gap-2 p-1'>
						{languages.map((language, index) => (
							<button
								key={language.key}
								onClick={() => handleLanguageChange(language)}
								className={clsx(
									selectedLanguage.key === language.key
										? 'bg-gray-100 text-gray-900 dark:bg-gray-400 dark:text-gray-100'
										: 'text-gray-700 dark:text-gray-100',
									'px-4 py-2 text-sm text-left items-center hover:bg-gray-100 dark:hover:bg-gray-400 flex shadow-md',
									index % 2 === 0 ? 'rounded-r' : 'rounded-l'
								)}
							>
								<UIFlagIcon countryCode={language.key} />
								<span className='truncate'>{language.name}</span>
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
