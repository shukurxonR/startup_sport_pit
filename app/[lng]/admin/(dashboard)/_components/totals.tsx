'use client'

import { IOrder } from '@/app.types'
import { Card, CardContent } from '@/components/ui/card'
import { formatPrice } from '@/lib/utils'
interface Props {
	totalProduct: number
	totalReviews: number
	totalOrders: number
	orders: IOrder[]
}
function Totals({ totalProduct, totalReviews, totalOrders, orders }: Props) {
	const totalOrderPrice = orders.reduce((acc, order) => {
		return acc + order.totalPrice
	}, 0)
	return (
		<>
			<div className='grid grid-cols-1 md:grid-cols-4 gap-6 mb-6'>
				<Card className='shadow rounded-2xl'>
					<CardContent className='p-4'>
						<p className='text-gray-500'>Total Products</p>
						<h2 className='text-2xl font-bold'>{totalProduct}</h2>
					</CardContent>
				</Card>
				<Card className='shadow rounded-2xl'>
					<CardContent className='p-4'>
						<p className='text-gray-500'>Total Orders</p>
						<h2 className='text-2xl font-bold'>{totalOrders}</h2>
					</CardContent>
				</Card>
				<Card className='shadow rounded-2xl'>
					<CardContent className='p-4'>
						<p className='text-gray-500'>Total Reviews</p>
						<h2 className='text-2xl font-bold'>{totalReviews}</h2>
					</CardContent>
				</Card>
				<Card className='shadow rounded-2xl'>
					<CardContent className='p-4'>
						<p className='text-gray-500'>Total Revenue</p>
						<h2 className='text-2xl font-bold'>
							{formatPrice(totalOrderPrice)} so`m
						</h2>
					</CardContent>
				</Card>
			</div>
		</>
	)
}

export default Totals
