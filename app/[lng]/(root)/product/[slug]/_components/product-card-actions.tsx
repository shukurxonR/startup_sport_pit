'use client'
import { IProduct } from '@/app.types'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import useFavorite from '@/hooks/use-favorite'
import { formatPrice } from '@/lib/utils'
import { addToCard, removeCard } from '@/redux/reducers/basketState'
import { RootState } from '@/redux/store'
import { useAuth } from '@clerk/nextjs'
import {
	Check,
	Handbag,
	Heart,
	ShoppingBasket,
	ShoppingCart,
} from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'sonner'

function ProductCardActions(product: IProduct) {
	const router = useRouter()
	const { userId } = useAuth()
	const { toggleFavorite, isFavorite } = useFavorite(userId!)
	const dispatch = useDispatch()

	const handleAddToCart = () => {
		dispatch(addToCard(product))
		toast.success(`Savatga ${product.name}, qoshildi ✅`)
	}
	const handleRemoveToCart = () => {
		dispatch(removeCard(product._id))
		toast.success(`Mahsulot savatdan olindi! ✅`)
	}

	const basketProducts = useSelector(
		(state: RootState) => state.basket.basketProducts
	)
	const isBasket = basketProducts.find(card => card._id === product._id)
	return (
		<>
			<div className='my-14 max-md:my-5 flex flex-col gap-4 w-full top-10'>
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
							<div className='grid grid-cols-4  gap-2'>
								<Button
									className='max-md:col-span-3 col-span-2 font-space-grotesk text-md bg-gray-200 '
									variant={'outline'}
								>
									Hozir sotib olish
								</Button>
								{isBasket ? (
									<Button
										variant={'outline'}
										className='bg-blue-500 hover:bg-blue-600 max-md:hidden'
										onClick={handleRemoveToCart}
									>
										<ShoppingCart className='!size-5 text-white' />
									</Button>
								) : (
									<Button
										variant={'outline'}
										onClick={handleAddToCart}
										className='max-md:hidden'
									>
										<ShoppingCart className='!size-5' />
									</Button>
								)}
								<Button
									variant={isFavorite(product._id) ? 'destructive' : 'outline'}
									onClick={() => toggleFavorite(product._id)}
								>
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

							<Image
								src='/cards/visa.png'
								alt='Uzcard'
								width={40}
								height={40}
							/>
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
			{/*  */}
			<div
				className='fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 
    shadow-[0_-4px_10px_rgba(0,0,0,0.1)] 
    p-4 flex justify-between items-center z-50 md:hidden h-20'
			>
				<div className=' font-bold text-pink-600 text-xl'>
					{product.discount ? (
						<div className='flex flex-col'>
							<h1 className='font-extrabold font-space-grotesk tracking-[2px] text-xl'>
								{formatPrice(
									product.price - (product.price * product.percent) / 100
								)}{' '}
								<span className='text-sm text-black tracking-tighter'>
									{' '}
									so`m
								</span>
							</h1>
							<span className='line-through text-black text-muted-foreground text-[12px] '>
								{formatPrice(product.price)}{' '}
								<span className='text-[10px] tracking-tighter'> so`m</span>{' '}
							</span>
						</div>
					) : (
						<h1 className='font-extrabold font-space-grotesk tracking-[2px] text-2xl'>
							{formatPrice(product.price)}
							so`m
						</h1>
					)}
				</div>
				{isBasket ? (
					<Button
						variant={'outline'}
						size={'lg'}
						className='bg-gray-200 '
						onClick={() => router.push('/shopping-card/card')}
					>
						<Handbag className='!size-5 text-violet-600' />{' '}
						<h1 className='text-violet-600'>O`tish</h1>
					</Button>
				) : (
					<Button
						size={'lg'}
						onClick={handleAddToCart}
						className='bg-violet-600 hover:bg-violet-500'
					>
						Savatga
					</Button>
				)}
			</div>
		</>
	)
}

export default ProductCardActions
