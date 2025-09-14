'use client'
import { products, selectCategories } from '@/components/constants'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import {
	Table,
	TableBody,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import { ICard } from '@/types/types'
import { Plus } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import TableProducts from './_components/table-products'

export default function ProductsPage() {
	const [stateProducts, setProduct] = useState<ICard[]>(products)
	const { lng } = useParams()
	const router = useRouter()

	const onDelete = (id: number) => {
		const filterProducts = stateProducts.filter(product => product.id !== id)
		setProduct(filterProducts)
	}
	return (
		<div className='p-6 h-full'>
			<div className='flex items-center justify-between mb-6'>
				<h1 className='text-2xl font-bold'>My Products</h1>
				<div className='flex items-center gap-3 '>
					<Select>
						<SelectTrigger className='w-[560px]  font-space-grotesk tracking-widest'>
							<SelectValue placeholder='Filter Products' />
						</SelectTrigger>
						<SelectContent className='border'>
							{selectCategories.map(category => (
								<SelectItem value={category.label} key={category.label}>
									{category.name}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
					<Button
						className='bg-blue-600 hover:bg-blue-700 flex items-center'
						onClick={() => router.push(`/${lng}/admin/create-product`)}
					>
						<Plus />
						<span>Add Product</span>
					</Button>
				</div>
			</div>

			<Card className='shadow rounded-2xl'>
				<CardContent className='p-4'>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Product</TableHead>
								<TableHead>Category</TableHead>
								<TableHead>Price</TableHead>

								<TableHead>Status</TableHead>
								<TableHead className='text-right'>Actions</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{stateProducts.map(product => (
								<TableProducts
									product={product}
									key={product.id}
									onDelete={() => onDelete(product.id)}
								/>
							))}
						</TableBody>
					</Table>
				</CardContent>
			</Card>
		</div>
	)
}
