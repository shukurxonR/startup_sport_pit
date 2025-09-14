'use client'

import { coruselBanner } from '@/components/constants'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
// import { TruckElectric } from 'lucide-react'
import Image from 'next/image'

function HomeCorusel() {
	return (
		<>
			<div className='max-w-6xl mx-auto mt-5'>
				<div className='w-full'>
					<Carousel
						opts={{ align: 'start', loop: true }}
						plugins={[
							Autoplay({
								delay: 3000,
							}),
						]}
					>
						<CarouselContent className='-ml-4'>
							{coruselBanner.map(banner => (
								<CarouselItem className='pl-4' key={banner.img}>
									<div className='relative w-full h-[400px]'>
										<Image
											src={banner.img}
											alt={banner.img}
											fill
											className='object-cover rounded-lg'
											priority
										/>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious className='absolute left-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 bg-white/80 hover:bg-white shadow-md rounded-full flex items-center justify-center' />
						<CarouselNext className='absolute right-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 bg-white/80 hover:bg-white shadow-md rounded-full flex items-center justify-center' />
					</Carousel>
				</div>
			</div>
			{/* <div className='max-w-6xl mx-auto mt-8'>
				<div className='grid grid-cols-4 gap-4'>
					<div>
						<TruckElectric className='!size-10' />
						<span>
							Доставка по Рес Узбекистан Для региональных доставок оплату можно
							воспеизвести после получении товара
						</span>
					</div>
					<div>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
						laboriosam id sunt qui deserunt maxime, amet cum a alias magni,
						tenetur quo quas. Asperiores voluptate quis veritatis magni, ab
						totam.
					</div>
					<div>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
						laboriosam id sunt qui deserunt maxime, amet cum a alias magni,
						tenetur quo quas. Asperiores voluptate quis veritatis magni, ab
						totam.
					</div>
					<div>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
						laboriosam id sunt qui deserunt maxime, amet cum a alias magni,
						tenetur quo quas. Asperiores voluptate quis veritatis magni, ab
						totam.
					</div>
				</div>
			</div> */}
		</>
	)
}

export default HomeCorusel
