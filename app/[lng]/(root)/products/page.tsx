import { getAllProducts, getTopProducts } from '@/actions/product-action'
import { searchParamsProps } from '@/app.types'
import TopBar from '@/components/shared/top-bar'
import { Suspense } from 'react'
import AllProducts from './_components/all-products'

export const dynamic = 'force-dynamic'

async function Page({ searchParams }: searchParamsProps) {
	const page = searchParams.page ? +searchParams.page : 1
	const filter = searchParams.filter
	const searchQuery = searchParams.search

	const allProductsJSON = await getAllProducts({ page, filter, searchQuery })
	const result = JSON.parse(JSON.stringify(allProductsJSON))
	const topProductsJSON = await getTopProducts()
	const topProducts = JSON.parse(JSON.stringify(topProductsJSON))
	return (
		<>
			<TopBar label='Products' />

			<Suspense fallback={<div>Loading...</div>}>
				<AllProducts result={result} topProducts={topProducts} />
			</Suspense>
		</>
	)
}

export default Page
