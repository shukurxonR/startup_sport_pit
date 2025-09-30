'use client'

import { IOrder } from '@/app.types'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { formatPrice } from '@/lib/utils'
import { format } from 'date-fns'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface Props {
	order: IOrder
	onSent?: () => void
}

function OrderCard({ order, onSent }: Props) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 25 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4, ease: 'easeOut' }}
		>
			<Card className='bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition overflow-hidden my-3'>
				<div className='flex items-center justify-between px-6 py-4 border-b bg-gray-50'>
					<div className='flex items-center gap-4'>
						<Avatar className='h-12 w-12'>
							<AvatarImage src={order.user?.picture} alt={order.fullName} />
							<AvatarFallback>DB</AvatarFallback>
						</Avatar>
						<div>
							<h2 className='text-lg font-semibold text-gray-800'>
								{order.fullName}
							</h2>
							<p className='text-sm text-gray-500'>{order.user?.email}</p>
						</div>
					</div>

					{order.sent ? (
						<Badge
							variant={'outline'}
							className='h-8 cursor-pointer bg-blue-100'
						>
							Yakunlangan
						</Badge>
					) : (
						<Badge
							variant={'destructive'}
							className='h-8 cursor-pointer'
							onClick={onSent}
						>
							Yakunlash
						</Badge>
					)}
				</div>
				<div className='p-6 space-y-5'>
					<div className='grid grid-cols-2 gap-y-2 text-sm text-gray-600'>
						<p>
							<span className='text-gray-700 font-bold'>Viloyat:</span>{' '}
							{order.region}
						</p>
						<p>
							<span className='text-gray-700 font-bold'>Buyurtma indeksi:</span>{' '}
							1132
						</p>
						<p>
							<span className='text-gray-700 font-bold'>Shahar:</span>{' '}
							{order.city}
						</p>
						<p>
							<span className='text-gray-700 font-bold'>Buyurtma Sanasi:</span>{' '}
							{format(new Date(order.createdAt), 'dd MMM yyyy, HH:mm')}
						</p>
					</div>

					{/* Products */}
					<div>
						<h3 className='text-sm font-semibold text-gray-800 mb-3'>
							Mahsulotlar <span className='text-red-600'>*</span>
						</h3>
						<div className='grid gap-3'>
							{order.products.map((p, i) => (
								<div
									key={i}
									className='flex items-center gap-4 border rounded-xl p-3 bg-white shadow-sm hover:shadow-md transition'
								>
									<Image
										width={64}
										height={64}
										src={p.product.images[0]}
										alt={p.product.name}
										className='w-16 h-16 rounded-md object-cover'
									/>
									<div className='flex-1'>
										<p className='font-medium text-gray-800'>
											{p.product.name}
										</p>
										<p className='text-xs text-gray-500'>
											{p.soni} dona ×
											{formatPrice(
												p.product.price -
													(p.product.price * p.product.percent) / 100
											)}
											so‘m
										</p>
									</div>
									<p className='text-sm font-semibold text-gray-800'>
										{formatPrice(
											(p.product.price -
												(p.product.price * p.product.percent) / 100) *
												p.soni
										)}{' '}
										so‘m
									</p>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Footer */}
				<div className='px-6 py-4 bg-gray-50 border-t flex items-center justify-between'>
					<span className='text-base font-space-grotesk font-bold text-gray-800'>
						Umumiy summa:
					</span>
					<span className='text-xl font-bold text-blue-600'>
						{order.totalPrice.toLocaleString()} so‘m
					</span>
				</div>
			</Card>
		</motion.div>
	)
}

export default OrderCard
