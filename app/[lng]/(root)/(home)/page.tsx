import { getDiscountProducts, getTopProducts } from '@/actions/product-action'
import AllCategories from './_components/categories'
import DiscountProducts from './_components/discount-products'
import InfoCards from './_components/info-cards'
import Services from './_components/services'
import HomeCorusel from './_components/slider'
import TopProducts from './_components/top-products'

async function Page() {
	const topProductsJSON = await getTopProducts()
	const topProducts = JSON.parse(JSON.stringify(topProductsJSON))
	const discountProductsJSON = await getDiscountProducts()
	const discountProducts = JSON.parse(JSON.stringify(discountProductsJSON))
	return (
		<div className='w-full'>
			<HomeCorusel />
			<AllCategories />
			<TopProducts topProducts={topProducts} />
			<DiscountProducts discountProducts={discountProducts} />
			<InfoCards />
			<Services />
		</div>
	)
}

export default Page

// /* <Brends /> */
