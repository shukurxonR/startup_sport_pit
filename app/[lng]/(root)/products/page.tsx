import { getAllProducts } from '@/actions/product-action'
import { searchParamsProps } from '@/app.types'
import TopBar from '@/components/shared/top-bar'
import AllProducts from './_components/all-products'

async function Page({ searchParams }: searchParamsProps) {
	const page = searchParams.page ? +searchParams.page : 1
	const filter = searchParams.filter
	const searchQuery = searchParams.search
	const allProductsJSON = await getAllProducts({ page, filter, searchQuery })
	const result = JSON.parse(JSON.stringify(allProductsJSON))
	return (
		<>
			<TopBar label='Products' />
			<AllProducts result={result} />
		</>
	)
}

export default Page
