import clsx from 'clsx';
import { UIToProductsButton } from './UIToProductsButton';
import { MouseEventHandler } from 'react';
import { TaggedText } from '@ayub-begimkulov/i18n';
import { useTranslate } from '../../i18n/i18n';
import { withTranslate } from '../../logic/withTranslate';

interface UIProductsNoResultsProps {
	category?: string;
	type?: string;
	className?: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	translate: ReturnType<typeof useTranslate>;
}

export const UIProductsNoResults = withTranslate(
	({ category, type, className, onClick, translate }: UIProductsNoResultsProps) => {
		return (
			<div
				className={clsx(
					'text-xl flex items-center justify-center flex-col h-[calc(100vh-10rem)]',
					className
				)}
			>
				{category && type && (
					<h1 className='text-center'>
						<TaggedText
							text={translate('products.no_results.both')}
							tags={{
								1: () => <span className='font-bold'>{type}</span>,
								2: () => <span className='font-bold'>{category}</span>,
							}}
						/>
					</h1>
				)}
				{!type && category && (
					<h1 className='text-center'>
						<TaggedText
							text={translate('products.no_results.category')}
							tags={{
								1: () => <span className='font-bold'>{category}</span>,
							}}
						/>
					</h1>
				)}
				{!type && !category && <h1>{translate('products.no_results.all')}</h1>}
				<UIToProductsButton onClick={onClick}>
					{translate('products.no_results.to_products')}
				</UIToProductsButton>
			</div>
		);
	}
);
