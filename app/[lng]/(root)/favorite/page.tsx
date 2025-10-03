import TopBar from '@/components/shared/top-bar'
import AllFavoriteProducts from './_components/all-favorite-products'

async function Page() {
	return (
		<div>
			<TopBar label={'Istaklarim'} />
			<AllFavoriteProducts />
		</div>
	)
}

export default Page
