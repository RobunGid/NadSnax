import { useEffect, useRef, useState } from 'react';
import { useI18n } from '../../i18n/i18n';
import { Language } from '../../types';
import { UIFlagIcon } from '../UI/UIFlagIcon';
import clsx from 'clsx';
import { IoIosArrowDown } from 'react-icons/io';

export const LanguageSelector = () => {
	const { lang, setLang } = useI18n();
	const languages: Language[] = [
		{ key: 'ru', name: 'Русский' },
		{ key: 'en', name: 'English' },
	];
	const [isOpen, setIsOpen] = useState(true);
	const selectedLanguage = languages.find((language) => language.key === lang);

	const languagesRef = useRef<HTMLDivElement | null>(null);

	const handleLanguageChange = async (language: Language) => {
		setLang(language.key);
		setIsOpen(false);
	};

	const handleCloseLanguagesMenu = (event: MouseEvent): void => {
		event.stopPropagation();
		if (
			languagesRef.current &&
			event.target != languagesRef.current &&
			!languagesRef.current.contains(event.target as Node)
		) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		window.addEventListener('click', handleCloseLanguagesMenu);
	}, []);

	if (!selectedLanguage) {
		return null;
	}
	return (
		<>
			<div className='flex items-center z-40' ref={languagesRef}>
				<div className='relative inline-block text-left'>
					<div>
						<button
							onClick={() => setIsOpen(!isOpen)}
							className={`inline-flex items-center justify-center w-full rounded-md border border-gray-300 dark:border-gray-600 
								shadow-xl px-4 py-2 bg-white dark:bg-gray-500 text-sm font-medium text-gray-700 dark:text-gray-200 
								hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 ring-gray-700`}
						>
							<UIFlagIcon countryCode={selectedLanguage.key} />
							{selectedLanguage.name}
							<IoIosArrowDown size='16' />
						</button>
					</div>
					{isOpen && (
						<div className='origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white dark:bg-gray-500 ring-1 ring-black ring-opacity-5'>
							<div className='grid grid-cols-1 gap-2 p-1'>
								{languages.map((language, index) => {
									return (
										<button
											key={language.key}
											onClick={() => handleLanguageChange(language)}
											className={clsx(
												selectedLanguage.key === language.key
													? 'bg-gray-100 text-gray-900 dark:bg-gray-400 dark:text-gray-100'
													: 'text-gray-700 dark:text-gray-100',
												'px-4 py-2 text-sm text-left items-center hover:bg-gray-100 dark:hover:bg-gray-400 flex shadow-md',
												index % 2 === 0
													? 'rounded-r'
													: 'rounded-l'
											)}
										>
											<UIFlagIcon countryCode={language.key} />
											<span className='truncate'>
												{language.name}
											</span>
										</button>
									);
								})}
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
};
