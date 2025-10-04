// 'use client'
// import { IProduct } from '@/app.types'
// import { cn } from '@/lib/utils'
// import { CircleAlert } from 'lucide-react'
// import Image from 'next/image'
// import { useState } from 'react'

// import Image from 'next/image'

// function InfoProduct(product: IProduct) {
// 	const [mainImage, setMainImage] = useState<string>(product.images?.[0])

// 	return (
// 		<>
// 			<div className='md:border-r-2 '>
// 				<h1 className='text-2xl font-space-grotesk font-bold w-[80%] max-md:w-[90%] line-clamp-2'>
// 					{product.name}
// 				</h1>

// 				<div className='flex items-center my-14 max-md:mt-10 max-md:mb-8 w-full max-md:gap-3'>
// 					<div className='flex flex-col gap-2 w-[20%]'>
// 						{product.images.map(image => (
// 							<div
// 								className='w-full'
// 								key={image}
// 								onClick={() => setMainImage(image)}
// 							>
// 								<Image
// 									src={image}
// 									alt={image}
// 									width={90}
// 									height={90}
// 									className={cn(
// 										'rounded-md border-2 p-2  cursor-pointer',
// 										mainImage === image ? 'border-blue-500' : ''
// 									)}
// 								/>
// 							</div>
// 						))}
// 					</div>
// 					<div className='relative  h-80 mx-auto w-[80%]'>
// 						<Image
// 							src={mainImage}
// 							alt='image'
// 							fill
// 							className='object-contain rounded-md'
// 						/>
// 					</div>
// 				</div>
// 			</div>
// 			<div className='max-md:hidden'>
// 				<div className='flex items-center gap-2'>
// 					<CircleAlert />
// 					<h1 className='font-semibold text-xl'>Tavsif</h1>
// 				</div>
// 				<div className='flex flex-col mt-4'>
// 					<span className='font-space-grotesk '>{product.description}</span>
// 				</div>
// 			</div>
// 		</>
// 	)
// }

// export default InfoProduct

'use client'

import { IProduct } from '@/app.types'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	type CarouselApi,
} from '@/components/ui/carousel'
import { cn } from '@/lib/utils'
import { CircleAlert } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

function InfoProduct(product: IProduct) {
	const [api, setApi] = useState<CarouselApi>()
	const [current, setCurrent] = useState(0)

	// Carousel active index kuzatamiz
	const handleSelect = (index: number) => {
		setCurrent(index)
		api?.scrollTo(index)
	}

	// Carousel event: slayd o'zgarganda thumbnail ham highlight bo‘ladi
	api?.on('select', () => {
		setCurrent(api.selectedScrollSnap())
	})

	return (
		<>
			<div className='md:border-r-2'>
				<h1 className='text-2xl font-space-grotesk font-bold w-[80%] max-md:w-[90%] line-clamp-2'>
					{product.name}
				</h1>

				<div className='flex items-start my-14 max-md:mt-10 max-md:mb-8 w-full gap-6'>
					<div className='flex flex-col gap-2 w-[20%]'>
						{product.images.map((image, index) => (
							<div key={image} onClick={() => handleSelect(index)}>
								<Image
									src={image}
									alt={image}
									width={90}
									height={90}
									className={cn(
										'rounded-md  border-2 p-2  cursor-pointer  transition-all duration-300',
										current === index ? 'border-blue-500 shadow-md' : null
									)}
								/>
							</div>
						))}
					</div>
					{/* 954029900 */}
					<div className='relative w-[80%]'>
						<Carousel
							setApi={setApi}
							opts={{ align: 'start', loop: true }}
							className='w-full'
						>
							<CarouselContent>
								{product.images.map((image, index) => (
									<CarouselItem key={image} className='flex justify-center'>
										<div className='relative w-full h-80'>
											<Image
												src={image}
												alt={`product-${index}`}
												fill
												className='object-contain rounded-lg transition-all duration-500'
											/>
										</div>
									</CarouselItem>
								))}
							</CarouselContent>
						</Carousel>
					</div>
				</div>
			</div>

			{/* Description */}
			<div className='max-md:hidden'>
				<div className='flex items-center gap-2'>
					<CircleAlert />
					<h1 className='font-semibold text-xl'>Tavsif</h1>
				</div>
				<div className='flex flex-col mt-4'>
					<span className='font-space-grotesk'>{product.description}</span>
				</div>
			</div>
		</>
	)
}

export default InfoProduct
