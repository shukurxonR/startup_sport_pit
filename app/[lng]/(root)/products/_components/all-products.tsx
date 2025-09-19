'use client'
import { IProduct } from '@/app.types'
import ProductCard from '@/components/cards/product-card'
import { selectCategories } from '@/components/constants'
import Header from '@/components/shared/header'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'

interface Props {
	allProducts: IProduct[]
}
function AllProducts({ allProducts }: Props) {
	return (
		<div className='max-w-6xl mx-auto '>
			<div className='flex items-center justify-between '>
				<Header
					description={
						'Lorem ipsum dolor sit amet consectetur it amet it amet '
					}
					title={'All Products'}
				/>
				<div className='self-end'>
					<Select>
						<SelectTrigger className='w-[560px]  font-space-grotesk tracking-widest'>
							<SelectValue placeholder='Filter Products' />
						</SelectTrigger>
						<SelectContent className='border'>
							{selectCategories.map(category => (
								<SelectItem value={category.label} key={category.label}>
									{category.name}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
			</div>

			<div className='grid grid-cols-4 gap-4 mt-8'>
				{allProducts.map(product => (
					<ProductCard key={product._id} {...product} />
				))}
			</div>
		</div>
	)
}

export default AllProducts
