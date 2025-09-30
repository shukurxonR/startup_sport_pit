'use client'

import Header from '@/components/shared/header'
import TopBar from '@/components/shared/top-bar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { deleteAllBasket } from '@/redux/reducers/basketState'
import { RootState } from '@/redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'sonner'
import CartSummary from './_components/card-summary'
import EmptyCart from './_components/empty-card'
import ProductItems from './_components/product-items'

export default function CartPage() {
	const basketProducts = useSelector(
		(state: RootState) => state.basket.basketProducts
	)
	const dispatch = useDispatch()

	const handleClear = () => {
		dispatch(deleteAllBasket())
		toast.success(`Barcha mahsulot savatingizdan ochirildi! ✅`)
	}

	return (
		<>
			<TopBar label={'Shopping-card'} />
			<div className='max-w-6xl mx-auto'>
				{basketProducts.length > 0 ? (
					<>
						<Header
							title={'Shopping card'}
							description={
								'Sizning savatingizdagi mahsulotlar, buyurtma berishingiz mumkun!'
							}
						/>
						<div className='grid grid-cols-3 gap-6 mt-4'>
							<div className='col-span-2'>
								<Card>
									<CardContent className='p-4 flex flex-col'>
										{basketProducts.map(product => (
											<ProductItems key={product._id} {...product} />
										))}
										<div className='mt-6 flex justify-end'>
											<Button
												variant={'destructive'}
												size={'default'}
												onClick={handleClear}
											>
												Delete all
											</Button>
										</div>
									</CardContent>
								</Card>
							</div>
							<div>
								<CartSummary />
							</div>
						</div>
					</>
				) : (
					<EmptyCart />
				)}
			</div>
		</>
	)
}
