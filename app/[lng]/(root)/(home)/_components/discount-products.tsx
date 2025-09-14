'use client'
import ProductCard from '@/components/cards/product-card'
import { products } from '@/components/constants'
// Mahsulotlar ma'lumotlari

const DiscountProducts = () => {
	const filterProducts = products.filter(product => product.discount === true)

	return (
		<div className='max-w-6xl mx-auto mt-10'>
			<div className='flex items-center gap-3 group'>
				{/* Gradient + shimmer text */}
				<h1 className='relative text-2xl font-extrabold bg-gradient-to-r from-red-600 via-pink-500 to-blue-600 bg-clip-text animate-bounce'>
					<span className='relative inline-block'>
						Heavily discounted products
					</span>
				</h1>
				<div className='relative'>
					{/* <BadgePercent className='w-9 h-9/> */}
					<h1 className=' text-2xl text-red-600 drop-shadow-lg animate-bounce group-hover:rotate-12 group-hover:scale-125 transition duration-300'>
						Discounts
					</h1>
					<span className='absolute inset-0 rounded-full bg-red-500/40 blur-xl animate-ping'></span>
				</div>
			</div>

			<div className='grid grid-cols-4 gap-4 mt-8'>
				{filterProducts.map(product => (
					<ProductCard key={product.id} {...product} />
				))}
			</div>
		</div>
	)
}

export default DiscountProducts
