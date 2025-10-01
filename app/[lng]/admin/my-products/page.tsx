import { allProductsByAdmin } from '@/actions/product-action'
import { searchParamsProps } from '@/app.types'
import { auth } from '@clerk/nextjs/server'
import UserProducts from './_components/user-products'

export const dynamic = 'force-dynamic'

async function Page({ searchParams }: searchParamsProps) {
	const { userId } = await auth() // ❌ await kerak emas
	const page = searchParams.page ? +searchParams.page : 1
	const filter = searchParams.filter
	const adminProductsJSON = await allProductsByAdmin({
		clerkId: userId!,
		page,
		filter,
	})
	const result = JSON.parse(JSON.stringify(adminProductsJSON))
	return (
		<>
			<UserProducts result={result} />
		</>
	)
}

export default Page
