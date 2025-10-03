'use client'
import { IProduct } from '@/app.types'
import { cn, formatPrice } from '@/lib/utils'
import { addToCard, removeCard } from '@/redux/reducers/basketState'
import { toggleFavorite } from '@/redux/reducers/favoriteState'
import { RootState } from '@/redux/store'
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
	const dispatch = useDispatch()

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
	const favoriteProducts = useSelector(
		(state: RootState) => state.favorite.favoriteProducts
	)

	const isBasket = basketProducts.find(card => card._id === product._id)
	const isFavorite = favoriteProducts.find(card => card._id === product._id)

	return (
		<Card
			key={product._id}
			className='overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer rounded-xl'
		>
			{/* Rasm qismi */}
			<div className='relative h-60 max-md:h-32 w-full bg-white'>
				<Link href={`/product/${product._id}`}>
					<Image
						src={product.images?.[0]}
						alt={product.name}
						fill
						className='object-contain p-3 md:p-6'
					/>
				</Link>

				{/* Badge-lar */}
				<div className='absolute top-2 left-2 flex flex-col gap-1'>
					{product.top && (
						<Badge className='h-4 px-2 text-[10px] bg-blue-500 hover:bg-blue-400'>
							Top
						</Badge>
					)}
					<Badge className='h-4 px-2 text-[10px] bg-orange-400 hover:bg-orange-300'>
						New
					</Badge>
					{product.discount && (
						<Badge className='h-4 px-2 text-[10px] bg-red-500 animate-bounce mt-1'>
							-{product.percent}%
						</Badge>
					)}
				</div>

				{/* Like button */}
				<div className='absolute top-1 right-1'>
					{isFavorite ? (
						<motion.div
							whileHover={{ scale: 1.2, zIndex: 10, y: -10 }}
							whileTap={{ scale: 0.95 }}
							transition={{ type: 'spring', stiffness: 300, damping: 15 }}
							className='p-2 rounded-full bg-white shadow-md cursor-pointer'
							onClick={() => dispatch(toggleFavorite(product))}
						>
							<div className='md:hidden'>
								<Image
									src={'/icons/love.png'}
									alt={'favorite'}
									width={17}
									height={17}
								/>
							</div>
							<div className='max-md:hidden'>
								<Image
									src={'/icons/love.png'}
									alt={'favorite'}
									width={25}
									height={25}
								/>
							</div>
						</motion.div>
					) : (
						<motion.div
							whileHover={{ scale: 1.2, zIndex: 10, y: -10 }}
							whileTap={{ scale: 0.95 }}
							transition={{ type: 'spring', stiffness: 300, damping: 15 }}
							className='p-2 rounded-full bg-white shadow-md cursor-pointer'
							onClick={() => dispatch(toggleFavorite(product))}
						>
							<Heart className='text-red-500 max-md:!size-4' />
						</motion.div>
					)}
				</div>
			</div>

			{/* Content */}
			<CardContent className='p-3'>
				<Link href={`/product/${product._id}`}>
					<h3 className='font-medium text-sm max-md:text-xs mb-1 line-clamp-2 min-h-[36px]'>
						{product.name.slice(0, 40)}
					</h3>

					{/* Narx va Status */}
					<div className='flex items-center justify-between mb-1 md:mb-3 '>
						{product.discount && (
							<span className='text-[10px] md:text-sm line-through text-red-500'>
								{formatPrice(product.price)} so‘m
							</span>
						)}
						<span className='text-green-600 text-[10px] md:text-sm'>
							Mavjud
						</span>
					</div>
				</Link>

				{/* Narx + Button */}
				<div className='flex max-md:grid max-md:grid-cols-1 max-md:gap-2  items-center justify-between  mt-2'>
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
							<Button
								variant={'outline'}
								className=' h-6 text-[12px] w-full md:h-8 '
							>
								Bekor qilish
							</Button>
						</motion.div>
					) : (
						<motion.div
							onClick={handleAddToCart}
							whileHover={{ scale: 1.04, zIndex: 10, y: -4 }}
							whileTap={{ scale: 0.95 }}
							transition={{ type: 'spring', stiffness: 500, damping: 15 }}
						>
							<Button className='bg-blue-600 w-full hover:bg-blue-800 h-6 text-[12px] md:h-8 '>
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
