import { userFavoriteProducts } from '@/actions/user-action'
import TopBar from '@/components/shared/top-bar'
import { auth } from '@clerk/nextjs/server'
import AllFavoriteProducts from './_components/all-favorite-products'

async function Page() {
	const { userId } = await auth()

	const favoriteProductsJSON = await userFavoriteProducts(userId!)
	const favoriteProducts = JSON.parse(JSON.stringify(favoriteProductsJSON))
	return (
		<div>
			<TopBar label={'Favorite'} />
			<AllFavoriteProducts favoriteProducts={favoriteProducts} />
		</div>
	)
}

export default Page
