import { IProduct } from '@/app.types'
import ProductCard from '@/components/cards/product-card'
import Header from '@/components/shared/header'
interface Props {
	favoriteProducts: IProduct[]
}

function AllFavoriteProducts({ favoriteProducts }: Props) {
	return (
		<div className='max-w-6xl mx-auto'>
			<Header
				title={'All Favirite Products'}
				description={'Sizning barcha yoqtirgan mahsulotlaringiz'}
			/>
			<div className='grid grid-cols-4 gap-4 mt-8'>
				{favoriteProducts.map(product => (
					<ProductCard key={product._id} {...product} />
				))}
			</div>
		</div>
	)
}

export default AllFavoriteProducts
