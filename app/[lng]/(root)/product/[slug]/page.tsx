import { getProductByCategory, getProductById } from '@/actions/product-action'
import TopBar from '@/components/shared/top-bar'
import InfoProduct from './_components/info-product'
import ProductCardActions from './_components/product-card-actions'
import RecommendProducts from './_components/products-by-category'

async function Page({ params: { slug } }: { params: { slug: string } }) {
	const productJSON = await getProductById(slug)
	const product = JSON.parse(JSON.stringify(productJSON))
	const productsCategoryJSON = await getProductByCategory(product.category)
	const productsByCategory = JSON.parse(JSON.stringify(productsCategoryJSON))
	console.log(productsByCategory)

	return (
		<>
			<TopBar label={'Products'} extra={product.name} />
			<div className='max-w-6xl mx-auto mt-8'>
				<div className='grid grid-cols-3 gap-4'>
					<div className='col-span-2'>
						<InfoProduct {...product} />
					</div>
					<ProductCardActions {...product} />
				</div>
				<div className='flex flex-col gap-4'>
					<h1 className='text-2xl font-extrabold font-space-grotesk'>
						Shuningdek, tavsiya qilamiz
					</h1>
					<div>
						<RecommendProducts products={productsByCategory} />
					</div>
				</div>
			</div>
		</>
	)
}

export default Page
