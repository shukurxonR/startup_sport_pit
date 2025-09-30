import { IOrder } from '@/app.types'
import OrderCard from '@/components/cards/order-card'
interface Props {
	orders: IOrder[]
}

function CompletedOrders({ orders }: Props) {
	const completedOrders = orders.filter(order => order.sent === true)
	return (
		<div className='grid gap-6'>
			{completedOrders.map(order => (
				<OrderCard key={order._id} order={order} />
			))}
		</div>
	)
}

export default CompletedOrders
