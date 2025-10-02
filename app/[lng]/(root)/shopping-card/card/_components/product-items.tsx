'use client'

import { Button } from '@/components/ui/button'
import { formatPrice } from '@/lib/utils'
import {
	basketProductsTip,
	decrement,
	increment,
	removeCard,
} from '@/redux/reducers/basketState'
import { Trash2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch } from 'react-redux'

export default function Productproducts(product: basketProductsTip) {
	const dispatch = useDispatch()

	return (
		<div
			key={product._id}
			className='w-full flex flex-col md:flex-row items-center md:items-center md:justify-between gap-3 border-b md:border-none py-3 md:py-2 rounded-lg md:rounded-none shadow-sm md:shadow-none bg-white'
		>
			{/* Rasm + nom */}
			<div className='flex items-center gap-3 w-full md:w-[40%]'>
				<Link
					href={`/product/${product._id}`}
					className='flex-shrink-0 relative w-16 h-16 md:w-20 md:h-20'
				>
					<Image
						src={product.images[0]}
						alt={product.name}
						fill
						className='rounded-md object-cover bg-gray-50'
					/>
				</Link>
				<h2 className='font-medium text-gray-800 line-clamp-2 text-sm md:text-base'>
					{product.name}
				</h2>
			</div>

			{/* Narx + miqdor */}
			<div className='flex items-center justify-between md:justify-start w-full md:w-[40%] gap-4'>
				<div className='flex items-center border rounded-full px-2 bg-gray-50 shadow-sm'>
					<Button
						variant='ghost'
						size='sm'
						onClick={() => dispatch(decrement(product._id))}
						disabled={product.soni === 1}
						className='text-lg px-2'
					>
						–
					</Button>
					<span className='px-2 text-sm font-medium'>{product.soni}</span>
					<Button
						variant='ghost'
						size='sm'
						onClick={() => dispatch(increment(product._id))}
						className='text-lg px-2'
					>
						+
					</Button>
				</div>

				<p className='font-semibold text-blue-600 text-sm md:text-base'>
					{formatPrice(
						(product.price - (product.price * product.percent) / 100) *
							product.soni
					)}{' '}
					so‘m
				</p>
			</div>

			{/* Delete */}
			<div className='flex justify-end w-full md:w-[20%]'>
				<Button
					variant='ghost'
					onClick={() => dispatch(removeCard(product._id))}
					className='p-2 hover:bg-red-50 rounded-full'
				>
					<Trash2 className='text-red-600 w-5 h-5' />
				</Button>
			</div>
		</div>
	)
}
