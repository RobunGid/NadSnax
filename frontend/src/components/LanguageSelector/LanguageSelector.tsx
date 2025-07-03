import { useRef, useState } from 'react';
import { useI18n } from '../../i18n/i18n';
import { Language } from '../../types';
import { UILanguageSelector } from './UI/UILanguageSelector';
import { languages } from '../../logic/languages';
import { useOutside } from '../../hooks/useOutside';

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

	useOutside({
		onClickOutside: () => {
			setIsOpen(false);
		},
		element: languagesRef,
	});

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
