import { FC } from 'react';
import ChipsHomeImage from '../../assets/chips-image.png';
import CrackersHomeImage from '../../assets/crackers-image.png';
import CookiesHomeImage from '../../assets/cookies-image.png';
import JuiceHomeImage from '../../assets/juice-image.png';
import { ReviewElement } from './ReviewElement';
import { Review } from '../../types';

export const HomePage: FC = () => {
	const reviews: Review[] = [];
	return (
		<div className='p-3'>
			<section className='flex justify-center items-center w-full'>
				<h1 className='text-3xl font-bold m-3'>
					NadSnax - Crunch into happiness!
				</h1>
			</section>
			<section className='flex gap-3 py-3 space-x-3 w-full flex-wrap justify-around'>
				<img src={ChipsHomeImage} alt='Chips Image' width='400' className='p-5' />
				<div className='flex flex-col xl:flex-row gap-4'>
					<div className='max-w-72'>
						<h2 className='font-semibold'>
							Welcome to NadSnax – Your Ultimate Snack Destination!
						</h2>
						<p>Craving something crunchy, savory, or sweet? </p>
						<p>
							At NadSnax, we bring you the best selection of chips, nuts,
							and irresistible treats to satisfy your snack cravings.
						</p>
					</div>
					<div className='max-w-72'>
						<p>
							Whether you're looking for classic flavors or bold new tastes,
							we've got something for every snacker.
						</p>
						<p>
							Explore our delicious collection and snack happier with
							NadSnax!
						</p>
					</div>
				</div>
			</section>
			<hr />
			<section className='flex gap-3 py-3 space-x-3 w-full flex-wrap justify-around'>
				<div className='flex flex-col xl:flex-row gap-4'>
					<div className='max-w-72'>
						<h2 className='font-semibold'>
							Discover the Crunch of Perfection at NadSnax!
						</h2>
						<p>
							Treat yourself to our delightful selection of crispy crackers
							– the perfect snack for any occasion.
						</p>
						<p>
							With a variety of flavors and textures, our crackers are great
							on their own or paired with your favorite dips and spreads.
						</p>
					</div>
					<div className='max-w-72'>
						<p>
							Whether you're enjoying a quiet moment or sharing with
							friends, NadSnax crackers offer a satisfying crunch and
							unbeatable taste.
						</p>
						<p>Find your new favorite snack today at NadSnax!</p>
					</div>
				</div>
				<img
					src={CrackersHomeImage}
					alt='Crackers Image'
					width='400'
					className='p-5'
				/>
			</section>
			<hr />
			<section className='flex gap-3 py-3 space-x-3 w-full flex-wrap justify-around'>
				<img
					src={CookiesHomeImage}
					alt='Chips Image'
					width='400'
					className='p-5'
				/>
				<div className='flex flex-col xl:flex-row gap-4'>
					<div className='max-w-72'>
						<h2 className='font-semibold'>
							Indulge in the Sweetness of NadSnax Cookies!
						</h2>
						<p>raving something crunchy, savory, or sweet?</p>
						<p>
							From classic chocolate chip to deliciously unique flavors,
							NadSnax cookies are the perfect treat for any sweet tooth.
						</p>
					</div>
					<div className='max-w-72'>
						<p>
							Whether you're unwinding after a long day or sharing a moment
							with friends, these cookies make every occasion a little
							sweeter.
						</p>
						<p>
							Satisfy your cravings and find your favorite today at NadSnax!
						</p>
					</div>
				</div>
			</section>
			<hr />
			<section className='flex gap-3 py-3 space-x-3 w-full flex-wrap justify-around'>
				<div className='flex flex-col xl:flex-row gap-4'>
					<div className='max-w-72'>
						<h2 className='font-semibold'>
							Refresh and Recharge with NadSnax Juices!
						</h2>
						<p>
							Quench your thirst with our vibrant selection of natural,
							refreshing juices, packed with fresh flavors to keep you
							energized throughout the day.
						</p>
						<p>
							From tangy citrus to sweet berry blends, each sip is like a
							burst of sunshine.
						</p>
					</div>
					<div className='max-w-72'>
						<p>
							Perfect for a quick refresh or paired with your favorite
							snack, NadSnax juices bring the perfect balance of taste and
							hydration.
						</p>
						<p>Stay refreshed and invigorated with NadSnax juices! </p>
					</div>
				</div>
				<img
					src={JuiceHomeImage}
					alt='Crackers Image'
					width='400'
					className='p-5'
				/>
			</section>
			<hr />
			<section className='flex gap-3 py-3 space-x-3 w-full flex-wrap justify-around flex-col items-center'>
				<h2 className='font-bold text-2xl'>Contact details</h2>
				<div className='bg-gray-200 p-14 mx-24'>
					<h3 className='text-center font-semibold text-xl mb-5'>Contact us</h3>
					<p>
						Thank you for visiting our website! Currently, our contact form is
						temporarily unavailable. We apologize for any inconvenience this
						may cause and appreciate your understanding. Please check back
						soon for updates. In the meantime, feel free to explore our snacks
						and enjoy browsing our site!
					</p>
				</div>
			</section>
			<hr />
			<section className='flex gap-3 py-3 space-x-3 flex-col justify-center align-middle'>
				<h2 className='font-bold text-2xl text-center'>Out customer's reviews</h2>
				<ul className='flex gap-5 overflow-hidden justify-center w-full mx-auto'>
					{reviews.map((review) => (
						<ReviewElement key={review.id} review={review} />
					))}
				</ul>
			</section>
		</div>
	);
};
