import { getOrdersByStatistik, getTotalOrders } from '@/actions/order-action'
import { getAllProductsAdmin } from '@/actions/product-action'
import { getTotalReviewsAdmin } from '@/actions/review-action'
import { auth } from '@clerk/nextjs/server'
import Statistics from './_components/statistics'
import Totals from './_components/totals'

export default async function Page() {
	const { userId } = await auth()

	const totalProduct = await getAllProductsAdmin(userId!)
	const totalReviews = await getTotalReviewsAdmin(userId!)
	const { total, orders } = await getTotalOrders()
	const ordersS = await getOrdersByStatistik()

	return (
		<div className='p-6 h-full'>
			<h1 className='text-2xl font-bold mb-6'>Dashboard</h1>

			<Totals
				totalProduct={totalProduct}
				totalReviews={totalReviews}
				totalOrders={total}
				orders={orders}
			/>
			<Statistics orders={ordersS} />
		</div>
	)
}
