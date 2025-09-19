import { IProduct } from '@/app.types'
import ProductCard from '@/components/cards/product-card'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
interface Props {
	products: IProduct[]
}
function RecommendProducts({ products }: Props) {
	return (
		<div className='w-full'>
			<Carousel
				opts={{
					align: 'start',
				}}
				className='w-full'
			>
				<CarouselContent>
					{products.map(product => (
						<CarouselItem key={product._id} className='basis-1/4'>
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
