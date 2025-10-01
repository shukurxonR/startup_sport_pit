import { getAllProducts } from '@/actions/product-action'
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

	return (
		<>
			<TopBar label='Products' />

			<Suspense fallback={<div>Loading...</div>}>
				<AllProducts result={result} />
			</Suspense>
		</>
	)
}

export default Page
