import ChipsHomeImage from '../../../assets/chips-image.png';
import CrackersHomeImage from '../../../assets/crackers-image.png';
import CookiesHomeImage from '../../../assets/cookies-image.png';
import JuiceHomeImage from '../../../assets/juice-image.png';
import { ReactNode } from 'react';
import { useTranslate } from '../../../i18n/i18n';
import { withTranslate } from '../../../logic/withTranslate';

interface UIHomePageProps {
	customerReviews: ReactNode[];
	translate: ReturnType<typeof useTranslate>;
}

export const UIHomePage = withTranslate(
	({ customerReviews, translate }: UIHomePageProps) => {
		return (
			<div className='p-3'>
				<section className='flex justify-center items-center w-full'>
					<h1 className='text-3xl font-bold m-3'>
						{translate('homepage.slogan')}
					</h1>
				</section>

				<section className='flex gap-3 py-3 space-x-3 w-full flex-wrap justify-around'>
					<img
						src={ChipsHomeImage}
						alt='Chips Image'
						width='400'
						className='p-5'
					/>
					<div className='flex flex-col xl:flex-row gap-4'>
						<div className='max-w-72'>
							<h2 className='font-semibold'>
								{translate('homepage.section1.title')}
							</h2>
							<p>{translate('homepage.section1.p1')}</p>
							<p>{translate('homepage.section1.p2')}</p>
						</div>
						<div className='max-w-72'>
							<p>{translate('homepage.section1.p3')}</p>
							<p>{translate('homepage.section1.p4')}</p>
						</div>
					</div>
				</section>

				<hr className='border-gray-800' />

				<section className='flex gap-3 py-3 space-x-3 w-full flex-wrap justify-around'>
					<div className='flex flex-col xl:flex-row gap-4'>
						<div className='max-w-72'>
							<h2 className='font-semibold'>
								{translate('homepage.section2.title')}
							</h2>
							<p>{translate('homepage.section2.p1')}</p>
							<p>{translate('homepage.section2.p2')}</p>
						</div>
						<div className='max-w-72'>
							<p>{translate('homepage.section2.p3')}</p>
							<p>{translate('homepage.section2.p4')}</p>
						</div>
					</div>
					<img
						src={CrackersHomeImage}
						alt='Crackers Image'
						width='400'
						className='p-5'
					/>
				</section>

				<hr className='border-gray-800' />

				<section className='flex gap-3 py-3 space-x-3 w-full flex-wrap justify-around'>
					<img
						src={CookiesHomeImage}
						alt='Cookies Image'
						width='400'
						className='p-5'
					/>
					<div className='flex flex-col xl:flex-row gap-4'>
						<div className='max-w-72'>
							<h2 className='font-semibold'>
								{translate('homepage.section3.title')}
							</h2>
							<p>{translate('homepage.section3.p1')}</p>
							<p>{translate('homepage.section3.p2')}</p>
						</div>
						<div className='max-w-72'>
							<p>{translate('homepage.section3.p3')}</p>
							<p>{translate('homepage.section3.p4')}</p>
						</div>
					</div>
				</section>

				<hr className='border-gray-800' />

				<section className='flex gap-3 py-3 space-x-3 w-full flex-wrap justify-around'>
					<div className='flex flex-col xl:flex-row gap-4'>
						<div className='max-w-72'>
							<h2 className='font-semibold'>
								{translate('homepage.section4.title')}
							</h2>
							<p>{translate('homepage.section4.p1')}</p>
							<p>{translate('homepage.section4.p2')}</p>
						</div>
						<div className='max-w-72'>
							<p>{translate('homepage.section4.p3')}</p>
							<p>{translate('homepage.section4.p4')}</p>
						</div>
					</div>
					<img
						src={JuiceHomeImage}
						alt='Juice Image'
						width='400'
						className='p-5'
					/>
				</section>

				<hr className='border-gray-800' />

				<section className='flex gap-3 py-5 space-x-3 w-full flex-wrap justify-around flex-col items-center'>
					<h2 className='font-bold text-2xl'>
						{translate('homepage.contact.title')}
					</h2>
					<div className='bg-gray-200 dark:bg-gray-800 p-4 md:p-14 mx-4 md:mx-24'>
						<h3 className='text-center font-semibold text-xl mb-5'>
							{translate('homepage.contact.subtitle')}
						</h3>
						<p>{translate('homepage.contact.message')}</p>
					</div>
				</section>

				<hr className='border-gray-800' />

				<section className='flex gap-3 py-3 space-x-3 flex-col justify-center align-middle'>
					<h2 className='font-bold text-2xl text-center'>
						{translate('homepage.reviews.title')}
					</h2>
					<div className='overflow-hidden w-full'>
						<ul className='marquee'>{customerReviews}</ul>
					</div>
				</section>
			</div>
		);
	}
);
