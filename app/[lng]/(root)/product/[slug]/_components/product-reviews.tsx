'use client'
import { IReview } from '@/app.types'
import ReviewCard from '@/components/cards/review-card'
import { Button } from '@/components/ui/button'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import { openReview } from '@/redux/reducers/reviewState'
import Autoplay from 'embla-carousel-autoplay'
import { Dot, Star } from 'lucide-react'
import { useDispatch } from 'react-redux'
import ReviewModal from './review-modal'
interface Props {
	productReviews: IReview[]
}
function ProductReviews({ productReviews }: Props) {
	const dispatch = useDispatch()

	return (
		<>
			<div className='max-w-6xl mx-auto mt-12'>
				<div className='flex items-center justify-between'>
					<div className='flex items-center gap-2 max-md:hidden'>
						<Star className='fill-[#d87737] text-[#DD6B20] !size-7' />
						<h1 className='text-md md:text-2xl  font-medium font-space-grotesk'>
							Mahsulot bahosi <span className='font-bold'>4.5</span>
						</h1>
						<Dot />
						<div className='font-space-grotesk md:text-2xl   text-sm'>
							<span className='font-serif'>20 </span>ta Fikirlar
						</div>
					</div>
					{/*  */}
					<div className='flex items-center'>
						<div className='flex gap-2 items-center px-1'>
							<Star className='fill-[#d87737] text-[#DD6B20] !size-5' />
							<h1 className='text-xl font-semibold'>Sharhlar</h1>
						</div>
					</div>

					<Button
						className='bg-blue-600 hover:bg-blue700 md:hidden'
						size={'sm'}
						onClick={() => dispatch(openReview())}
					>
						Fikir bildirish
					</Button>
					<Button
						className='bg-blue-600 hover:bg-blue700 max-md:hidden'
						size={'lg'}
						onClick={() => dispatch(openReview())}
					>
						Fikir bildirish
					</Button>
				</div>
				<Carousel
					className='w-full mt-8 max-md:mt-6'
					opts={{ align: 'start', loop: true }}
					plugins={[
						Autoplay({
							delay: 4000,
						}),
					]}
				>
					<CarouselContent>
						{productReviews.map(review => (
							<CarouselItem
								className='basis-1/4 max-md:basis-3/4'
								key={review._id}
							>
								<ReviewCard {...review} />
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>
			<ReviewModal />
		</>
	)
}

export default ProductReviews
