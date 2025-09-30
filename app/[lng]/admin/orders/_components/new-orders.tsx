'use client'

import { orderSented } from '@/actions/order-action'
import { IOrder } from '@/app.types'
import OrderCard from '@/components/cards/order-card'
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'

interface Props {
	orders: IOrder[]
}

function NewOrders({ orders }: Props) {
	const newOrders = orders.filter(order => order.sent === false)

	const [open, setOpen] = useState(false)
	const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null)
	const pathname = usePathname()

	function handleYakunlash() {
		if (selectedOrderId) {
			const promise = orderSented(selectedOrderId, pathname)
			toast.promise(promise, {
				loading: 'Loading...',
				success: 'Successfully loaded ✅',
				error: 'Unfortunately, the product could not be loaded.',
			})
			setOpen(false)
			setSelectedOrderId(null)
		}
	}

	function openConfirm(id: string) {
		setSelectedOrderId(id)
		setOpen(true)
	}

	return (
		<>
			<div className='grid gap-6'>
				{newOrders.map(order => (
					<OrderCard
						key={order._id}
						order={order}
						onSent={() => openConfirm(order._id)}
					/>
				))}
			</div>

			<AlertDialog open={open} onOpenChange={setOpen}>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>
							Mahsulotni egasiga yubordingizmi?
						</AlertDialogTitle>
						<AlertDialogDescription>
							Ushbu amalni yakunlasangiz qaytarib bo‘lmaydi. Davom etishni
							xohlaysizmi?
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						{/* faqat modalni yopadi */}
						<AlertDialogCancel onClick={() => setOpen(false)}>
							Bekor qilish
						</AlertDialogCancel>
						{/* yakunlash tugmasi */}
						<AlertDialogAction onClick={handleYakunlash}>
							Yakunlash
						</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</>
	)
}

export default NewOrders
