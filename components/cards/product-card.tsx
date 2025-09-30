'use client'
import { IProduct } from '@/app.types'
import useFavorite from '@/hooks/use-favorite'
import { cn, formatPrice } from '@/lib/utils'
import { addToCard, removeCard } from '@/redux/reducers/basketState'
import { RootState } from '@/redux/store'
import { useAuth } from '@clerk/nextjs'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'sonner'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'

function ProductCard(product: IProduct) {
	const { userId } = useAuth()
	const dispatch = useDispatch()
	const { toggleFavorite, isFavorite } = useFavorite(userId!)

	const handleAddToCart = () => {
		dispatch(addToCard(product))
		toast.success(`Savatga ${product.name}, qoshildi ✅`)
	}
	const handleRemoveToCart = () => {
		dispatch(removeCard(product._id))
		toast.success(`Mahsulot savatdan olindi! ✅`)
	}

	const basketProducts = useSelector(
		(state: RootState) => state.basket.basketProducts
	)
	const isBasket = basketProducts.find(card => card._id === product._id)
	return (
		<Card
			key={product._id}
			className='overflow-hidden transition-all  duration-300 hover:shadow-lg cursor-pointer'
		>
			<div className='relative h-60 max-md:h-40 w-full'>
				<Link href={`/product/${product._id}`}>
					<Image
						src={product.images?.[0]}
						alt={product.name}
						fill
						className='object-contain p-6'
					/>
				</Link>
				<div className='absolute top-2 left-2 flex flex-col gap-1'>
					{product.top ? (
						<Badge className='text-sm  h-5 w-12 cursor-pointer bg-blue-500 hover:bg-blue-400 '>
							Top
						</Badge>
					) : null}

					<Badge
						variant={'default'}
						className='text-sm bg-orange-400 w-14 h-5 hover:bg-orange-300 cursor-pointer'
					>
						New
					</Badge>

					{product.discount ? (
						<Badge
							variant={'destructive'}
							className='text-sm animate-bounce duration-300 h-5 cursor-pointer mt-1'
						>
							-{product.percent}%
						</Badge>
					) : null}
				</div>
				<div className='absolute top-2 right-2'>
					{isFavorite(product._id) ? (
						<motion.div
							whileHover={{ scale: 1.2, zIndex: 10, y: -10 }}
							whileTap={{ scale: 0.95 }}
							transition={{ type: 'spring', stiffness: 300, damping: 15 }}
							className='p-2 rounded-full bg-white shadow-md cursor-pointer'
							onClick={() => toggleFavorite(product._id)}
						>
							<Image
								src={'/icons/love.png'}
								alt={'favorite'}
								width={25}
								height={25}
							/>
						</motion.div>
					) : (
						<motion.div
							whileHover={{ scale: 1.2, zIndex: 10, y: -10 }}
							whileTap={{ scale: 0.95 }}
							transition={{ type: 'spring', stiffness: 300, damping: 15 }}
							className='p-2 rounded-full bg-white shadow-md cursor-pointer'
							onClick={() => toggleFavorite(product._id)}
						>
							<Heart className='text-red-500 ' />
						</motion.div>
					)}
				</div>
			</div>
			<CardContent className='p-4'>
				<Link href={`/product/${product._id}`}>
					<h3 className='font-semibold text-[17px] max-md:text-[13px]   mb-2 line-clamp-2 min-h-[48px] max-md:min-h-[40px] '>
						{product.name.slice(0, 40)}
					</h3>

					<div className='flex items-c3enter justify-between  mb-2'>
						{product.discount ? (
							<span className='text-sm line-through text-red-600'>
								{formatPrice(product.price)} so`m
							</span>
						) : null}
						<span className='text-green-600 text-sm'>Active</span>
					</div>
				</Link>
				<div className='flex items-center justify-between mt-4'>
					<Link href={`/product/${product._id}`}>
						<span
							className={cn(
								'text-[17px] max-md:text-[13px] flex items-center gap-1 font-bold text-red-600 ',
								product.discount
									? 'animate-pulse text-blue-600 duration-600'
									: null
							)}
						>
							<p>
								{formatPrice(
									product.price - (product.price * product.percent) / 100
								)}{' '}
							</p>
							<p className='text-[9px] max-md:self-end md:text-sm text-black'>
								so`m
							</p>
						</span>
					</Link>
					{isBasket ? (
						<motion.div
							onClick={handleRemoveToCart}
							whileHover={{ scale: 1.04, zIndex: 10, y: -4 }}
							whileTap={{ scale: 0.95 }}
							transition={{ type: 'spring', stiffness: 500, damping: 15 }}
						>
							<Button variant={'outline'} size={'sm'}>
								Savatdan olish
							</Button>
						</motion.div>
					) : (
						<motion.div
							onClick={handleAddToCart}
							whileHover={{ scale: 1.04, zIndex: 10, y: -4 }}
							whileTap={{ scale: 0.95 }}
							transition={{ type: 'spring', stiffness: 500, damping: 15 }}
						>
							<Button className='bg-blue-600 hover:bg-blue-800' size={'sm'}>
								Savatga
							</Button>
						</motion.div>
					)}
				</div>
			</CardContent>
		</Card>
	)
}

export default ProductCard
