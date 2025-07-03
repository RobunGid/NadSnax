import { ComponentType } from 'react';
import { useTranslate } from '../i18n/i18n';

export function withTranslate<P extends { translate: (key: string) => string }>(
	WrappedComponent: ComponentType<P>
) {
	return function WithTranslateWrapper(props: Omit<P, 'translate'>) {
		const translate = useTranslate();
		return <WrappedComponent {...(props as P)} translate={translate} />;
	};
}
