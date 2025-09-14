'use client'
import { Card, CardContent } from '@/components/ui/card'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { BicepsFlexed } from 'lucide-react'
import Image from 'next/image'

function InfoCards() {
	return (
		<div className='max-w-6xl mx-auto mt-16'>
			<div className='flex items-center my-4 gap-2'>
				<h1 className='text-2xl font-bold '>Fitness Informations</h1>
				<BicepsFlexed />
			</div>
			<Carousel
				opts={{ align: 'start', loop: true }}
				plugins={[
					Autoplay({
						delay: 2000,
					}),
				]}
				className='w-full'
			>
				<CarouselContent>
					<CarouselItem className='md:basis-1/3 lg:basis-1/3'>
						<div className='p-2'>
							<Card className='overflow-hidden shadow-md hover:shadow-lg transition'>
								<div className='relative w-full h-[200px]'>
									<Image
										src={'/info/sushka.jpg'}
										alt={'d'}
										fill
										className='object-cover'
									/>
								</div>
								<CardContent className='p-4'>
									<h2 className='text-lg font-semibold'>Sushka Program</h2>
									<p className='text-sm text-muted-foreground'>
										Weight loss training plan with proper nutrition and
										workouts.
									</p>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
					<CarouselItem className='md:basis-1/3 lg:basis-1/3'>
						<div className='p-2'>
							<Card className='overflow-hidden shadow-md hover:shadow-lg transition'>
								<div className='relative w-full h-[200px]'>
									<Image
										src={'/info/farmak.jpg'}
										alt={'d'}
										fill
										className='object-cover'
									/>
								</div>
								<CardContent className='p-4'>
									<h2 className='text-lg font-semibold'>Sushka Program</h2>
									<p className='text-sm text-muted-foreground'>
										Weight loss training plan with proper nutrition and
										workouts.
									</p>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
					<CarouselItem className='md:basis-1/3 lg:basis-1/3'>
						<div className='p-2'>
							<Card className='overflow-hidden shadow-md hover:shadow-lg transition'>
								<div className='relative w-full h-[200px]'>
									<Image
										src={'/info/natural.jpg'}
										alt={'d'}
										fill
										className='object-cover'
									/>
								</div>
								<CardContent className='p-4'>
									<h2 className='text-lg font-semibold'>Sushka Program</h2>
									<p className='text-sm text-muted-foreground'>
										Weight loss training plan with proper nutrition and
										workouts.
									</p>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>

					<CarouselItem className='md:basis-1/3 lg:basis-1/3'>
						<div className='p-2'>
							<Card className='overflow-hidden shadow-md hover:shadow-lg transition'>
								<div className='relative w-full h-[200px]'>
									<Image
										src={'/info/nabor.jpg'}
										alt={'d'}
										fill
										className='object-cover'
									/>
								</div>
								<CardContent className='p-4'>
									<h2 className='text-lg font-semibold'>Sushka Program</h2>
									<p className='text-sm text-muted-foreground'>
										Weight loss training plan with proper nutrition and
										workouts.
									</p>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
					<CarouselItem className='md:basis-1/3 lg:basis-1/3'>
						<div className='p-2'>
							<Card className='overflow-hidden shadow-md hover:shadow-lg transition'>
								<div className='relative w-full h-[200px]'>
									<Image
										src={'/info/farma.png'}
										alt={'d'}
										fill
										className='object-cover'
									/>
								</div>
								<CardContent className='p-4'>
									<h2 className='text-lg font-semibold'>Sushka Program</h2>
									<p className='text-sm text-muted-foreground'>
										Weight loss training plan with proper nutrition and
										workouts.
									</p>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
					<CarouselItem className='md:basis-1/3 lg:basis-1/3'>
						<div className='p-2'>
							<Card className='overflow-hidden shadow-md hover:shadow-lg transition'>
								<div className='relative w-full h-[200px]'>
									<Image
										src={'/info/trembolon.jpg'}
										alt={'d'}
										fill
										className='object-cover'
									/>
								</div>
								<CardContent className='p-4'>
									<h2 className='text-lg font-semibold'>Sushka Program</h2>
									<p className='text-sm text-muted-foreground'>
										Weight loss training plan with proper nutrition and
										workouts.
									</p>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	)
}

export default InfoCards
