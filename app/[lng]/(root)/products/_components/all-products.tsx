'use client'

import { IProduct } from '@/app.types'
import ProductCard from '@/components/cards/product-card'
import { selectCategories } from '@/components/constants'
import Header from '@/components/shared/header'
import Pagination from '@/components/shared/pagination'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { formUrlQuery } from '@/lib/utils'
import { useRouter, useSearchParams } from 'next/navigation'

interface Props {
	result: {
		products: IProduct[]
		isNext: boolean
	}
}

function AllProducts({ result }: Props) {
	const searchParams = useSearchParams()
	const router = useRouter()
	const page = searchParams.get('page')

	function onUpdateParams(value: string) {
		const newUrl = formUrlQuery({
			params: searchParams.toString(),
			key: 'filter',
			value,
		})
		router.push(newUrl)
	}

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
					<Select onValueChange={onUpdateParams}>
						<SelectTrigger className='w-[560px] font-space-grotesk tracking-widest'>
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
				{result.products.map(product => (
					<ProductCard key={product._id} {...product} />
				))}
			</div>

			<Pagination pageNumber={page ? +page : 1} isNext={result.isNext} />
		</div>
	)
}

export default AllProducts
