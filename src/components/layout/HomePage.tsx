import { FC } from 'react';
import FirstHomeImage from '../../assets/chips_image1.png';

export const HomePage: FC = () => {
	return (
		<div className='pt-3'>
			<div className='flex justify-center items-center w-full'>
				<h1 className='text-3xl font-bold'>NadSnax - Crunch into happiness!</h1>
			</div>
			<div className='flex items-start gap-3 py-3 space-x-3 flex-wrap'>
				<img src={FirstHomeImage} alt='Chips Image' width='400' className='p-5' />
				<div className='w-80'>
					<p>Welcome to NadSnax – Your Ultimate Snack Destination!</p>
					<p>Craving something crunchy, savory, or sweet? </p>
					<p>
						At NadSnax, we bring you the best selection of chips, nuts, and
						irresistible treats to satisfy your snack cravings.
					</p>
				</div>
				<div className='w-80'>
					<p>
						Whether you're looking for classic flavors or bold new tastes,
						we've got something for every snacker.
					</p>
					<p>
						Explore our delicious collection and snack happier with NadSnax!
					</p>
				</div>
			</div>
		</div>
	);
};
