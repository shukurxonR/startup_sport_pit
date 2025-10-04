'use client'

import { IProduct } from '@/app.types'
import ProductCard from '@/components/cards/product-card'
import { selectCategories } from '@/components/constants'
import Header from '@/components/shared/header'
import Pagination from '@/components/shared/pagination'
import { Button } from '@/components/ui/button'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { formUrlQuery } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'

interface Props {
	result: {
		products: IProduct[]
		isNext: boolean
	}
	topProducts: IProduct[]
}

function AllProducts({ result, topProducts }: Props) {
	const searchParams = useSearchParams()
	const router = useRouter()
	const page = searchParams.get('page')

	function onUpdateParams(value: string) {
		const newUrl = formUrlQuery({
			params: searchParams.toString(),
			key: 'filter',
			value,
			remove: ['search', 'page'],
		})
		router.push(newUrl)
	}

	return (
		<div className='max-w-6xl mx-auto max-md:px-3'>
			<div className='flex items-center justify-between w-full'>
				<div className='w-[65%]'>
					<Header
						description={'O`zingizga mos kelgan mahsulotni qidiring'}
						title={'Barcha mahsulotlar'}
					/>
				</div>
				<div className='self-end max-md:w-[35%]'>
					<Select onValueChange={onUpdateParams}>
						<SelectTrigger className='w-[560px] max-md:w-full font-space-grotesk tracking-widest'>
							<SelectValue placeholder='Filterlash' />
						</SelectTrigger>
						<SelectContent className='border'>
							{selectCategories.map(category => (
								<SelectItem value={category.label} key={category.label}>
									{category.name}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
			</div>
			{result.products.length > 0 ? (
				<div className='grid grid-cols-4 max-md:grid-cols-2 gap-3 mt-8'>
					{result.products.map(product => (
						<ProductCard key={product._id} {...product} />
					))}
				</div>
			) : (
				<>
					<div className='flex flex-col items-center justify-center min-h-[60vh] text-center'>
						<Image
							src='/notpro.png' // rasmni public/images ichiga qo'y
							alt='Empty cart'
							width={200}
							height={200}
							className='mb-6'
						/>
						<h2 className='text-2xl font-semibold mb-2'>
							Siz izlagan narsani topilmadi
						</h2>
						<p className='text-gray-500 max-w-md mb-6'>
							Mahsulot nomida xatolik yoki bizda hali bunday mahsulot
							boʻlmasligi mumkin
						</p>
						<Link href='/products'>
							<Button
								variant='outline'
								size={'lg'}
								className='px-6 py-2 bg-gray-100'
							>
								Barcha mahsulotlar
							</Button>
						</Link>
					</div>
					{/*  */}
					<div className='flex items-center justify-between'>
						<h1 className='text-2xl font-bold text-gray-900 self-start'>
							Top mahsulotlar
						</h1>
						<button className='relative text-sm font-medium text-blue-600 cursor-pointer self-end group underline'>
							Hammsi
							<span className='absolute left-0 -bottom-0.5 h-[1px] w-0 bg-red-600 transition-all duration-400 group-hover:w-full'></span>
						</button>
					</div>

					<div className='grid grid-cols-4 gap-3 max-md:grid-cols-2 mt-4'>
						{topProducts.map(product => (
							<ProductCard key={product._id} {...product} />
						))}
					</div>
				</>
			)}

			<Pagination pageNumber={page ? +page : 1} isNext={result.isNext} />
		</div>
	)
}

export default AllProducts
