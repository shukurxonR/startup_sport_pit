'use client'
import { IProduct } from '@/app.types'
import ProductCard from '@/components/cards/product-card'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
interface Props {
	products: IProduct[]
	productId: string
}
function RecommendProducts({ products, productId }: Props) {
	const tafsiyaProducts = products.filter(product => product._id !== productId)
	return (
		<div className='w-full'>
			<Carousel
				opts={{ align: 'start', loop: true }}
				plugins={[
					Autoplay({
						delay: 2000,
					}),
				]}
				className='w-full'
			>
				<CarouselContent>
					{tafsiyaProducts.map(product => (
						<CarouselItem
							key={product._id}
							className='basis-1/4 max-md:basis-2/4'
						>
							<ProductCard {...product} />
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	)
}

export default RecommendProducts
