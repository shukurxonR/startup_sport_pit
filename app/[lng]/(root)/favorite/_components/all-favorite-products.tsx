import { IProduct } from '@/app.types'
import ProductCard from '@/components/cards/product-card'
import Header from '@/components/shared/header'
interface Props {
	favoriteProducts: IProduct[]
}

function AllFavoriteProducts({ favoriteProducts }: Props) {
	return (
		<div className='max-w-6xl mx-auto max-md:px-3'>
			<Header
				title={'Yoqtirilganlar'}
				description={'Sizning barcha yoqtirgan mahsulotlaringiz'}
			/>
			<div className='grid grid-cols-4 max-md:grid-cols-2 gap-3 mt-8 '>
				{favoriteProducts.map(product => (
					<ProductCard key={product._id} {...product} />
				))}
			</div>
		</div>
	)
}

export default AllFavoriteProducts
