import { getProductById } from '@/actions/product-action'
import Header from '@/components/shared/header'
import { Separator } from '@/components/ui/separator'
import { Settings2 } from 'lucide-react'
import EditDescription from './_components/edit-description'
import EditProductImage from './_components/edit-product-image'
import EditProductName from './_components/edit-product-name'
import EditPriceEndBrend from './_components/edit-product-price'
import EditTopEndDiscount from './_components/edit-top'

async function Page({
	params: { productid },
}: {
	params: { productid: string }
}) {
	const productJSON = await getProductById(productid)
	const product = JSON.parse(JSON.stringify(productJSON))
	return (
		<div className='p-4'>
			<Header
				title={product.name}
				description='Mahsulotni boshqarish va tahlil qilish paneli'
			/>
			<Separator className='my-3 border border-b-blue-700' />

			<div className='mt-4'>
				<div className='flex items-center gap-1'>
					<h1 className='text-xl font-bold font-space-grotesk'>
						Mahsulotni tahlil qilish
					</h1>
					<Settings2 />
				</div>

				<div className='grid grid-cols-3 gap-2 mt-4'>
					<div className='col-span-2 flex flex-col gap-2'>
						<EditProductName {...product} />
						<EditDescription {...product} />
						<EditPriceEndBrend {...product} />
						<EditTopEndDiscount {...product} />
					</div>
					<div>
						<EditProductImage {...product} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Page
