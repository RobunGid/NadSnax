import { ChangeEvent, EventHandler, MouseEventHandler } from 'react';
import { FiPlus } from 'react-icons/fi';
import styles from './UIProductDetailsQuantityChooser.module.css';
import clsx from 'clsx';
import { useTranslate } from '../../../i18n/i18n';
import { withTranslate } from '../../../logic/withTranslate';

interface UIProductDetailsQuantityChooserProps {
	count?: number;
	className?: string;
	onAdd: MouseEventHandler;
	onDelete: MouseEventHandler;
	onInputChange: EventHandler<ChangeEvent<HTMLInputElement>>;
	translate: ReturnType<typeof useTranslate>;
}

export const UIProductDetailsQuantityChooser = withTranslate(
	({
		count,
		className,
		onAdd,
		onDelete,
		onInputChange,
		translate,
	}: UIProductDetailsQuantityChooserProps) => {
		return (
			<div className={clsx('text-2xl', className)}>
				{!count ? (
					<div
						className='text-xl dark:bg-sky-800 bg-orange-400 dark:hover:bg-sky-900 flex cursor-pointer h-[60px] justify-center items-center gap-2 rounded-full px-3 py-1 font-bold transition hover:bg-orange-500 hover:scale-105'
						onClick={onAdd}
					>
						<FiPlus />
						<button>
							{translate('product_details.quantity_chooser.add_to_cart')}
						</button>
					</div>
				) : (
					<div className='dark:bg-sky-800 bg-orange-400 hover:bg-orange-500 dark:hover:bg-sky-900 h-[60px] relative flex justify-center rounded-full font-bold transition'>
						<button
							className='mr-auto w-3/4 hover:rounded-tl-full hover:rounded-bl-full'
							onClick={onDelete}
						>
							–
						</button>
						<div className='text-center flex justify-center'>
							<input
								type='number'
								value={count}
								className={clsx(
									'bg-transparent w-2/3 text-center box-border focus:outline-none border-0 focus:border-4 focus:scale-125 dark:border-cyan-700 border-amber-700',
									styles['quantity-chooser-input']
								)}
								onChange={onInputChange}
							/>
						</div>
						<button
							className='ml-auto dark:hover:bg-sky-900 hover:bg-orange-500 w-3/4 hover:rounded-br-full hover:rounded-tr-full'
							onClick={onAdd}
						>
							+
						</button>
					</div>
				)}
			</div>
		);
	}
);
