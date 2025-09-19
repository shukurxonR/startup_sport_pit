import { getAllProducts } from '@/actions/product-action'
import TopBar from '@/components/shared/top-bar'
import AllProducts from './_components/all-products'

async function Page() {
	const allProductsJSON = await getAllProducts()
	const allProducts = JSON.parse(JSON.stringify(allProductsJSON))
	return (
		<>
			<TopBar label='Products' />
			<AllProducts allProducts={allProducts} />
		</>
	)
}

export default Page
