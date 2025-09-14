import { cn, formatPrice } from '@/lib/utils'
import { ICard } from '@/types/types'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'
function ProductCard(product: ICard) {
	const { lng } = useParams()

	return (
		<div>
			<Card
				key={product.id}
				className='overflow-hidden transition-all duration-300 hover:shadow-lg'
			>
				<div className='relative h-60 w-full'>
					<Image src={product.image} alt={product.name} fill className='p-8' />
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
								Discount
							</Badge>
						) : null}
					</div>
					<div className='absolute top-2 right-2'>
						<motion.div
							whileHover={{ scale: 1.2, zIndex: 10, y: -10 }}
							whileTap={{ scale: 0.95 }}
							transition={{ type: 'spring', stiffness: 300, damping: 15 }}
							className='p-2 rounded-full bg-white shadow-md cursor-pointer'
						>
							<Heart className='text-red-500 ' />
						</motion.div>
					</div>
				</div>

				<CardContent className='p-4'>
					<h3 className='font-semibold text-lg mb-2 line-clamp-2 '>
						{product.name}
					</h3>

					<div className='flex items-center justify-between  mb-2'>
						{product.discount ? (
							<span className=' text-sm line-through'>
								{formatPrice(product.price * 1.1, lng as string)} so`m
							</span>
						) : null}
						<span className='text-green-600 text-sm'>{product.status}</span>
					</div>

					<div className='flex items-center justify-between mt-4'>
						<span
							className={cn(
								'text-[18px] font-bold text-red-600 ',
								product.discount
									? 'animate-pulse text-blue-600 duration-600'
									: null
							)}
						>
							{formatPrice(product.price, lng as string)} so`m
						</span>
						<motion.div
							whileHover={{ scale: 1.04, zIndex: 10, y: -4 }}
							whileTap={{ scale: 0.95 }}
							transition={{ type: 'spring', stiffness: 500, damping: 15 }}
						>
							<Button className='bg-blue-600 hover:bg-blue-800'>
								В корзину
							</Button>
						</motion.div>
					</div>
				</CardContent>
			</Card>
		</div>
	)
}

export default ProductCard
