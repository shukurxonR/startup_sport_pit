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
			className='flex items-center w-full gap-4 border-b py-3 '
		>
			<div className='flex item items-center gap-4 w-[50%]'>
				<Link href={`/product/${product._id}`}>
					<Image
						src={product.images[0]}
						alt={product.name}
						width={60}
						height={60}
						className='rounded'
					/>
				</Link>
				<div>
					<h2 className='font-medium'>{product.name}</h2>
				</div>
			</div>
			<div className='flex items-center gap-2 w-[50%]'>
				<div className='border rounded-lg px-2'>
					<Button
						variant='ghost'
						size='sm'
						onClick={() => dispatch(decrement(product._id))}
						disabled={product.soni === 1}
					>
						-
					</Button>
					<span className='px-2'>{product.soni}</span>
					<Button
						variant='ghost'
						size='sm'
						onClick={() => dispatch(increment(product._id))}
					>
						+
					</Button>
				</div>
				<p className='font-semibold'>
					{formatPrice(
						(product.price - (product.price * product.percent) / 100) *
							product.soni
					)}{' '}
					so`m
				</p>
			</div>
			<Button variant='ghost' onClick={() => dispatch(removeCard(product._id))}>
				<Trash2 className='text-red-700 cursor-pointer !size-5 ' />
			</Button>
		</div>
	)
}
