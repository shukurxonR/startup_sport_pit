import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'
import { ICard } from '@/types/types'
import Image from 'next/image'

interface Props {
	product: ICard
	onDelete: () => void
}
function TableProducts({ product, onDelete }: Props) {
	return (
		<TableRow key={product.id}>
			<TableCell className='flex items-center gap-3'>
				<Image
					src={product.image}
					alt={product.name}
					width={40}
					height={40}
					className='rounded-md border'
				/>
				<span>{product.name}</span>
			</TableCell>
			<TableCell>{product.category}</TableCell>
			<TableCell>${product.price.toFixed()}</TableCell>
			<TableCell>
				{product.status === 'Active' && (
					<Badge className='bg-green-500'>Active</Badge>
				)}
				{product.status === 'Low Stock' && (
					<Badge className='bg-yellow-500'>Low Stock</Badge>
				)}
				{product.status === 'Out of Stock' && (
					<Badge className='bg-red-500'>Out of Stock</Badge>
				)}
			</TableCell>
			<TableCell className='text-right'>
				<Button variant='outline' size='sm' className='mr-2'>
					Edit
				</Button>
				<Button variant='destructive' size='sm' onClick={onDelete}>
					Delete
				</Button>
			</TableCell>
		</TableRow>
	)
}

export default TableProducts
