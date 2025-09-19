'use client'
import { IProduct } from '@/app.types'
import { cn } from '@/lib/utils'
import { CircleAlert } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

function InfoProduct(product: IProduct) {
	const [mainImage, setMainImage] = useState<string>(product.images?.[0])
	return (
		<>
			<div className='border-r-2 '>
				<h1 className='text-2xl font-space-grotesk font-bold w-[80%]'>
					{product.name}
				</h1>

				<div className='flex items-center my-14 w-full '>
					<div className='flex flex-col gap-2 w-[20%]'>
						{product.images.map(image => (
							<div
								className='w-full'
								key={image}
								onClick={() => setMainImage(image)}
							>
								<Image
									src={image}
									alt={image}
									width={100}
									height={100}
									className={cn(
										' rounded-md border-2 p-2  cursor-pointer',
										mainImage === image ? 'border-blue-500' : ''
									)}
								/>
							</div>
						))}
					</div>
					<div className='relative  h-80 mx-auto w-[80%]'>
						<Image
							src={mainImage}
							alt='image'
							fill
							className='object-contain rounded-md'
						/>
					</div>
				</div>
			</div>
			<div>
				<div className='flex items-center gap-2'>
					<CircleAlert />
					<h1 className='font-semibold text-xl'>Tavsif</h1>
				</div>
				<div className='flex flex-col mt-4'>
					<span className='font-space-grotesk '>{product.description}</span>
				</div>
			</div>
		</>
	)
}

export default InfoProduct
