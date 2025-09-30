'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { formatPrice } from '@/lib/utils'
import { selectBasketSummary } from '@/redux/reducers/basketState'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux'

export default function CartSummary() {
	const { total, totalDiscount, deliveryPrice } =
		useSelector(selectBasketSummary)

	return (
		<Card>
			<CardContent className='p-4 space-y-2'>
				{/* Coupon */}
				<div>
					<h2 className='font-semibold mb-2'>Coupon Code</h2>
					<Input placeholder='Enter Your Coupon Code' />
					<Button className='mt-3 w-full' variant='outline'>
						Apply Your Coupon
					</Button>
				</div>
				<div>
					<h2 className='font-semibold mb-2'>Order Summary</h2>
					<div className='space-y-2 text-sm text-gray-600'>
						<div className='flex justify-between'>
							<span>Chegirma</span>
							<span>{formatPrice(totalDiscount)} so`m</span>
						</div>
						<div className='flex justify-between'>
							<span>Yetkazib berish</span>
							<span>
								{deliveryPrice === 0 ? 'Beepul' : formatPrice(deliveryPrice)}{' '}
							</span>
						</div>
					</div>
					<div className='flex justify-between mt-2 text-lg font-bold'>
						<span>Jami</span>
						<span>{formatPrice(total)}</span>
					</div>
				</div>{' '}
				gap-4
				<Separator className='my-3' />
				<div className='flex flex-col gap-1'>
					<div>
						<h2 className='font-semibold mb-2'>Payment Method</h2>
						<div className='flex gap-3'>
							<Image
								src='/cards/Mastercard.png'
								alt='UBank'
								width={40}
								height={40}
							/>
							<Image
								src='/cards/uzcard.png'
								alt='Nasiya'
								width={40}
								height={40}
							/>

							<Image
								src='/cards/visa.png'
								alt='Uzcard'
								width={40}
								height={40}
							/>
							<Image src='/cards/humo.webp' alt='Uzum' width={40} height={40} />
						</div>
					</div>
					<Link href={'/shopping-card/checkout'}>
						<Button className='w-full bg-blue-700 hover:bg-blue-800'>
							Rasmilashtirish
						</Button>
					</Link>
				</div>
			</CardContent>
		</Card>
	)
}
