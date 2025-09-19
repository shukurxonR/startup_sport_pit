'use client'
import { IProduct } from '@/app.types'
import ProductCard from '@/components/cards/product-card'
import useLng from '@/hooks/use-lng'

interface Props {
	topProducts: IProduct[]
}
const TopProducts = ({ topProducts }: Props) => {
	const t = useLng()

	return (
		<div className='max-w-6xl mx-auto mt-16'>
			<div className='flex items-center justify-between'>
				<h1 className='text-2xl font-bold text-gray-900 self-start'>
					Popular Products
					{t('title')}
				</h1>
				<button className='relative text-md font-medium text-blue-600 cursor-pointer self-end group'>
					See all products
					<span className='absolute left-0 -bottom-0.5 h-[1px] w-0 bg-red-600 transition-all duration-400 group-hover:w-full'></span>
				</button>
			</div>

			<div className='grid grid-cols-4 gap-4 mt-8'>
				{topProducts.map(product => (
					<ProductCard key={product._id} {...product} />
				))}
			</div>
		</div>
	)
}

export default TopProducts
