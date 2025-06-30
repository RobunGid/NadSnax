import clsx from 'clsx';
import { ReactNode } from 'react';

interface UIAdminStatisticsOptionProps {
	icon: ReactNode;
	title: string;
	type?: 'small' | 'big';
	value: number | string;
}

export const UIAdminStatisticsOption = ({
	icon,
	title,
	value,
	type,
}: UIAdminStatisticsOptionProps) => {
	return (
		<div
			className={clsx(
				'm-2 dark:bg-gray-600 shadow-xl rounded-xl flex w-72 justify-between items-center',
				(type == 'small' || !type) && 'py-2 px-4',
				type == 'big' && 'py-4 px-4'
			)}
		>
			{(type == 'small' || !type) && (
				<>
					<div className='flex gap-2'>
						{icon}
						{title}
					</div>
					<div>{value}</div>
				</>
			)}
			{type == 'big' && (
				<>
					<div className='flex flex-col gap-2'>
						<div className='text-3xl'>{value}</div>
						<div>{title}</div>
					</div>
					<div>{icon}</div>
				</>
			)}
		</div>
	);
};
