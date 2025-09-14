import AllCategories from './_components/categories'
import DiscountProducts from './_components/discount-products'
import InfoCards from './_components/info-cards'
import Services from './_components/services'
import HomeCorusel from './_components/slider'
import TopProducts from './_components/top-products'

async function page() {
	return (
		<>
			<HomeCorusel />
			<AllCategories />
			<TopProducts />
			<DiscountProducts />
			<InfoCards />
			<Services />
		</>
	)
}

export default page

// /* <Brends /> */
