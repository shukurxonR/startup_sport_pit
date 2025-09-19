import { allProductsByAdmin } from '@/actions/product-action'
import { auth } from '@clerk/nextjs/server'
import UserProducts from './_components/user-products'

async function Page() {
	const { userId } = await auth() // ❌ await kerak emas

	if (!userId) {
		return <div>Not signed in</div>
	}
	const adminProductsJSON = await allProductsByAdmin(userId!)
	const adminProducts = JSON.parse(JSON.stringify(adminProductsJSON))
	return (
		<>
			<UserProducts adminProducts={adminProducts} />
		</>
	)
}

export default Page
