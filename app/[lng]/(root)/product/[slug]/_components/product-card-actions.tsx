'use client'
import { IProduct } from '@/app.types'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { formatPrice } from '@/lib/utils'
import { Check, Heart, ShoppingBasket, ShoppingCart } from 'lucide-react'
import Image from 'next/image'

function ProductCardActions(product: IProduct) {
	return (
		<div className='my-14 flex flex-col gap-4'>
			<Card>
				<CardContent className='p-4 flex flex-col gap-6'>
					{product.discount ? (
						<div className='flex flex-col'>
							<h1 className='font-extrabold font-space-grotesk tracking-[2px] text-2xl'>
								{formatPrice(
									product.price - (product.price * product.percent) / 100
								)}{' '}
								so`m
							</h1>
							<span className='line-through text-red-500'>
								{formatPrice(product.price)}
							</span>
						</div>
					) : (
						<h1 className='font-extrabold font-space-grotesk tracking-[2px] text-2xl'>
							{formatPrice(product.price)}
							so`m
						</h1>
					)}
					<div className='flex flex-col gap-6'>
						<div className='grid grid-cols-4 gap-1'>
							<Button className='col-span-2	 bg-violet-600 hover:bg-violet-500'>
								Hozir sotib olish
							</Button>
							<Button className='bg-blue-500 hover:bg-blue-600'>
								<ShoppingCart className='!size-5' />
							</Button>
							<Button className='bg-red-500 hover:bg-red-600'>
								<Heart className='!size-5' />
							</Button>
						</div>
						<div className='flex flex-col gap-2'>
							<div className='flex items-center gap-2'>
								<Button
									variant={'outline'}
									size={'icon'}
									className='bg-teal-100'
								>
									<Check />
								</Button>
								<h1>19 dona xarid qilish mumkin</h1>
							</div>
							<div className='flex items-center gap-2'>
								<Button
									variant={'outline'}
									size={'icon'}
									className='bg-amber-100'
								>
									<ShoppingBasket />
								</Button>
								<h1>Bu haftada 17 kishi sotib oldi</h1>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
			<Card>
				<CardContent className='p-4'>
					<div className='flex flex-col gap-2'>
						<h1 className='font-extrabold font-space-grotesk  text-xl'>
							2 Kun ichida yetkazib beramiz
						</h1>
						<span className=' font-space-grotesk text-sm text-muted-foreground'>
							BTS po`chta orqali ishonchli yetkazib beramiz, hohlasangaz
							uyingizga, yoki BTS o`zingizga yaqin BTS punktlariga
						</span>
					</div>
				</CardContent>
			</Card>
			{/*  */}
			<Card>
				<CardHeader className='pb-2'>
					<CardTitle className='text-lg font-semibold text-gray-900'>
						Qulay usulda xavfsiz to‘lov
					</CardTitle>
					<p className='text-sm text-gray-500'>
						Karta orqali, naqd pulda yoki bo‘lib to‘lang
					</p>
				</CardHeader>

				<CardContent className='flex flex-wrap items-center gap-3'>
					{/* To'lov ikonkalari */}
					<div className='flex items-center gap-2'>
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

						<Image src='/cards/visa.png' alt='Uzcard' width={40} height={40} />
						<Image src='/cards/humo.webp' alt='Uzum' width={40} height={40} />
					</div>

					{/* Chiziq */}
					<Separator />

					<div>
						<h3 className='text-base font-semibold text-gray-900'>
							Qaytarish oson va tez
						</h3>
						<p className='text-sm text-gray-500'>
							Tovarlarni 10 kun ichida qabul qilamiz va darhol pulini
							qaytaramiz.{' '}
							<span className='text-blue-600 cursor-pointer hover:underline'>
								Batafsil
							</span>
						</p>
					</div>
				</CardContent>
			</Card>
		</div>
	)
}

export default ProductCardActions
