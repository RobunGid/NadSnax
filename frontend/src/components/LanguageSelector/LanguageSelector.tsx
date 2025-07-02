import { useEffect, useRef, useState } from 'react';
import { useI18n } from '../../i18n/i18n';
import { Language } from '../../types';
import { UILanguageSelector } from './UI/UILanguageSelector';
import { languages } from '../../logic/languages';

export const LanguageSelector = () => {
	const { lang, setLang } = useI18n();

	const [isOpen, setIsOpen] = useState(false);

	const selectedLanguage =
		languages.find((language) => language.key === lang) || languages[0];

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
		return () => {
			window.removeEventListener('click', handleCloseLanguagesMenu);
		};
	}, []);

	return (
		<UILanguageSelector
			handleLanguageChange={handleLanguageChange}
			isOpen={isOpen}
			handleToggleVisibility={() => {
				setIsOpen((prev) => !prev);
			}}
			languages={languages}
			ref={languagesRef}
			selectedLanguage={selectedLanguage}
		/>
	);
};
